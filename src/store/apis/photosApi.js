import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const photos = createApi({
    reducerPath: "photos",
    basePath: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/',
    }),
    endPoints(builder) {
        return {
            fetchPhotos: builder.query({}),
            addPhoto: builder.mutation({}),
            removePhoto: builder.mutation({}),
        }
    }
})