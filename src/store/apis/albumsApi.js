import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    reducerPath: 'albums',
    basePath: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: () => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
})

