import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const timeTableApiSlice = createApi({
    reducerPath: 'timeTableApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' ' }),
    endpoints: builder => ({
        //获取第一天排班数据
        getFirstData: builder.query({
            query: () => ' ' //url
        }),
        //获取第二天排班数据
        getSecondData: builder.query({
            query: () => ' ' //url
        }),
        //发送换班的两个组的组号
        exchangeGroup: builder.mutation({
            query: exchangeGroupNum => ({
                url: '',
                method: 'POST',
                body: exchangeGroupNum
            })
        })
    })
})

export const { useGetFirstDataQuery,useGetSecondDataQuery,useExchangeGroupMutation } = timeTableApiSlice