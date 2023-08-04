import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const numberApiSlice = createApi({
    reducerPath: 'numberApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' ' }),
    endpoints: builder => ({
        getNumber: builder.query({
            query: () => ' ' //url
        })
    })
})

export const { useGetNumberQuery } = numberApiSlice