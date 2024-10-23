import React, { useCallback, FC } from 'react';
import {
    ReactFlow,
    addEdge,
    useNodesState,
    useEdgesState,
} from '@xyflow/react';
// Components
import CustomTextNode from '../CustomTextNode';
// Types
import { PersonInfoGraphType } from './types';
// Styles
import '@xyflow/react/dist/style.css';

const nodeTypes = { textNode: CustomTextNode };

const PersonInfoGraph: FC<PersonInfoGraphType> = (props: PersonInfoGraphType) => {
    const {
        layoutNodes,
        layoutEdges,
    } = props;

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);

    const connectionLineStyle = { stroke: '#fff' };
    const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    return (
       <ReactFlow
           nodes={nodes}
           edges={edges}
           onNodesChange={onNodesChange}
           onEdgesChange={onEdgesChange}
           onConnect={onConnect}
           fitView
           nodeTypes={nodeTypes}
           defaultViewport={defaultViewport}
           connectionLineStyle={connectionLineStyle}
        />
    );
}

export default PersonInfoGraph;