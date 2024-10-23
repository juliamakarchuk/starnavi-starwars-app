export type PaginationDataType = {
    totalPages: number,
    pageNumber: number,
}

export type MainPageProps = {
    data: Array<Person>,
    paginationData: PaginationDataType,
    setPaginationData: (value: PaginationDataType) => void;
    isLoading: boolean,
    error: null | string
};

export type Person = {
    id: number,
    birth_year: string,
    eye_color: string,
    films: Array<number>
    gender: string,
    hair_color: string,
    height: string,
    homeworld: number,
    mass: string,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: Array<number>,
    starships: Array<number>,
    url: string,
    vehicles: Array<number>
}
