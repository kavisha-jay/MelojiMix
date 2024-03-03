import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '2639ec8a72msh7f27b9d7e3f94f3p1939eajsn693824c31c8c')

                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'}),
            useGetSongsDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id = ${songid}`}),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
        })
    });
    
    export const {
        useGetTopChartsQuery,
        useGetSongsDetailsQuery,
        useGetSongsByGenreQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;