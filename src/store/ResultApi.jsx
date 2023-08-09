import {createApi,fetchBaseQuery}from '@reduxjs/toolkit/dist/query/react'
const listApi=createApi({
    reducerPath:"listApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:1337/api/"
    }),
    endpoints(build){
        return{
            // 拉取用户数据
            getUserList:build.query({
                query(){
                    return 'list'
                }
            }),
            // 拉取管理员数据
            getAdminList:build.query({
                query(){
                    return 'list'
                }
            }),
            getPersonalInfo:build.query({
                query(){
                    return 'personalInfo'
                }
            }),
            // 提交用户端本人的评分结果
            submitUserList:build.mutation({
                query(){
                    return{
                        url:`list/${user.name}`,
                        method:"post"
                    }
                }}),
            // 提交所有人的评分结果,交到服务器中，下次代开页面就是本次提交的结果
            submitAdminList:build.mutation({
                query(list){
                    return{
                        url:`list`,
                        method:"post",
                        body:{
                            data:list.attributes
                        }
                    }
                }
            }),

        }
    }
})
export const{useGetUserListQuery,useGetAdminListQuery,useSubmitUserListMutation,useSubmitAdminListMutation,useGetPersonalInfoQuery}=listApi
export default listApi