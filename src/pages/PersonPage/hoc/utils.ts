import dagre from '@dagrejs/dagre';
// Types
import { Node, Edge } from '@xyflow/react';
import { FilmType, StarshipType } from '../types';
// helpers
import { numberToString } from '../../../helpers/utils';
import { NODE_WIDTH, NODE_HEIGHT } from './constants';

export const createNode = ({ id, data }: { id: string, data: { label: string, title: string } }) => {
   return ({
       id,
       data,
       type: 'textNode',
   })
};

export const getInitialNodes = (mainNode: Partial<Node>, filmsData:Array<FilmType>, starshipsData: Array<StarshipType>) => {
    const filmsNodes = filmsData.reduce((acc:any, film:FilmType) => {
        const newNode = createNode({ id: numberToString(film.id), data: { label: 'film', title: film.title } });
        acc.push(newNode);
        return acc;
    }, []);

    const starshipsNodes = starshipsData.reduce((acc:any | [], starship: StarshipType) => {
        starship.films.forEach((filmId: number) => {
            const newNode = createNode({ id: `${starship.id}-id-starship-in-movie-${filmId}`, data: { label: 'starship', title: starship.name } });
            acc.push(newNode);
            return acc;
        })
        return acc;
    }, []);

    return [mainNode, ...filmsNodes, ...starshipsNodes];
};

export const createEdge = ({ id, sourceId, targetId }: { id: string, sourceId: string, targetId: string }) => {
    return ({
        id,
        source: sourceId,
        target: targetId,
        animated: true
    })
};

export const getInitialEdges = (personId: number, filmsData: FilmType[], starshipsData: StarshipType[]) => {
    const filmsEdges = filmsData.reduce((acc: Partial<Edge>[], film: FilmType) => {
        const newEdge = createEdge({
            id: `edge-${film.title}`,
            sourceId: numberToString(personId),
            targetId: numberToString(film.id)
        });
        acc.push(newEdge);
        return acc;
    }, []);

    const starshipsEdges = starshipsData.reduce((acc: Partial<Edge>[], starship: StarshipType) => {
        starship.films.forEach((filmId:number) => {
            const newEdge = createEdge({
                id: `edge-${starship.name}-${filmId}`,
                sourceId: numberToString(filmId),
                targetId: `${starship.id}-id-starship-in-movie-${filmId}`
            });
            acc.push(newEdge);
        });
        return acc;
    }, []);

    return [...filmsEdges, ...starshipsEdges ];
};

export const getLayoutedElements = (nodes:any, edges:any, direction = 'TB') => {
    const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node:Node) => {
        dagreGraph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
    });

    edges.forEach((edge:Edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const newNodes = nodes.map((node:Node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        const newNode = {
            ...node,
            targetPosition: isHorizontal ? 'left' : 'top',
            sourcePosition: isHorizontal ? 'right' : 'bottom',
            // We are shifting the dagre node position (anchor=center center) to the top left
            // so it matches the React Flow node anchor point (top left).
            position: {
                x: nodeWithPosition.x - NODE_WIDTH/ 2,
                y: nodeWithPosition.y - NODE_HEIGHT / 2,
            },
        };

        return newNode;
    });

    return { nodes: newNodes, edges };
};