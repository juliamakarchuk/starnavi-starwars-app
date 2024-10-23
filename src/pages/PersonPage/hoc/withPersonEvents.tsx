import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useLocation } from 'react-router';
// API
import API from '../../../API';
// Helpers
import { getInitialNodes, getInitialEdges, getLayoutedElements, createNode } from './utils';
import { numberToString } from '../../../helpers/utils';
// Types
import { PersonPageProps } from '../types';

const withPersonEvents = (WrappedComponent: React.FunctionComponent <PersonPageProps>) => {
    return () => {
        let { state: { name: personName, id: personId, films: personFilms } } = useLocation();
        const [isLoading, setIsLoading] = useState(true);
        const [layoutNodes, setLayoutNodes] = useState([]);
        const [layoutEdges, setLayoutEdges] = useState([]);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            const fetchData = async () =>{
                setIsLoading(true);
                try {
                    const { data: { results: filmsDataResponse } } = await axios(API.getFilms(personName));
                    const { data: { results: starshipsDataResponse } } = await axios(API.getStarships({ personId, films: personFilms }));

                    // creating nodes/adges from data for graph
                    const mainNode = createNode({ data: { label: 'hero name', title: personName }, id: numberToString(personId) });
                    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
                        getInitialNodes(mainNode, filmsDataResponse, starshipsDataResponse),
                        getInitialEdges(personId, filmsDataResponse, starshipsDataResponse),
                    );

                    setLayoutNodes(layoutedNodes);
                    setLayoutEdges(layoutedEdges);
                } catch (error) {
                    setError((error as AxiosError).message);
                }
                setIsLoading(false);
            }

            fetchData();
        }, []);

        return (
            <WrappedComponent
                layoutNodes={layoutNodes}
                layoutEdges={layoutEdges}
                isLoading={isLoading}
                error={error}
            />
        );
    };
};

export default withPersonEvents;
