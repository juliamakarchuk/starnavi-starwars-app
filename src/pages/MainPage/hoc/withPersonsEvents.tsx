import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
// API
import API from '../../../API';
// constants
import { PAGE_SIZE } from '../../../helpers/constants';
// types
import { MainPageProps } from '../types';

const withPersonsEvents = (WrappedComponent: React.FunctionComponent <MainPageProps>) => {
    return () => {
        const [isLoading, setIsLoading] = useState(true);
        const [data, setData] = useState([]);
        const [error, setError] = useState<string | null>(null);
        const [countOfPersons, setCountOfPersons] = useState(0);
        const [paginationData, setPaginationData] = useState({ totalPages: 0, pageNumber: 0 });

        useEffect(() => {
            const fetchData = async () =>{
                setIsLoading(true);
                try {
                    const { data: response } = await axios(API.getPeople(paginationData.pageNumber + 1));
                    setData(response.results);
                    setCountOfPersons(response.count);
                } catch (error) {
                    setError((error as AxiosError).message)
                }
                setIsLoading(false);
            }

            fetchData();
        }, [paginationData.pageNumber]);

        useEffect(() => {
            setPaginationData({
                ...paginationData,
                totalPages: countOfPersons / PAGE_SIZE,
            });
        }, [countOfPersons]);

        return (
            <WrappedComponent
                data={data}
                paginationData={paginationData}
                setPaginationData={setPaginationData}
                isLoading={isLoading}
                error={error}
            />
        );
    };
};

export default withPersonsEvents;