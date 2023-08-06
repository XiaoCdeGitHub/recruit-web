import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' ' }),
    endpoints: build => ({
        postLogin:build.mutation({
            query(){
                return {
                    url: '',
                    data: {
                        name:'dhh',
                    },
                    method:'post'
                }
            }
        })
    })
})

export const { usePostLoginMutation } = loginApi