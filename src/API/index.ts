export default {
    getPeople: (page: number) => {
        return ({
            method: 'get',
            url: 'https://sw-api.starnavi.io/people/',
            params: { page }
        })
    },
    getFilms: (name: string) => {
        return ({
            method: 'get',
            url: 'https://sw-api.starnavi.io/films/',
            params: { name }
        })
    },
    getStarships: ({ personId, films }: { personId: number, films: Array<number>}) => {
        return ({
            method: 'get',
            url: 'https://sw-api.starnavi.io/starships/',
            params: { films__in: films.join(), pilots__in: personId }
        })
    },
};