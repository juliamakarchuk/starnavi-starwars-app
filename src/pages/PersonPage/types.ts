import { Edge, Node } from '@xyflow/react';

export type PersonPageProps = {
    layoutEdges: Edge[],
    layoutNodes: Node[],
    isLoading: boolean,
    error: null | string
};

export type FilmType = {
    id: number,
    characters: Array<number>,
    created: string,
    director: string,
    edited: string,
    episode_id: number,
    opening_crawl: string,
    planets: Array<number>,
    producer: string,
    release_date: string,
    species: Array<number>,
    starships: Array<number>,
    title: string,
    url: string,
    vehicles: Array<number>
};

export type StarshipType = {
    id: number,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    pilots: [],
    films: Array<number>,
    url: string,
    vehicle_class: string
};
