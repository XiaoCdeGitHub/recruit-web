import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const showInfoApiSlice = createApi({
    reducerPath: 'showInfoApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' ' }),
    endpoints: builder => ({
        getNumber: builder.query({
            query: () => ' ' //url
        })
    })
})

export const { useGetNumberQuery } = showInfoApiSlice