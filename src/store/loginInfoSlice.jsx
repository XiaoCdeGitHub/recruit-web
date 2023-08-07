/*
 * @Author: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @Date: 2023-08-04 21:44:32
 * @LastEditors: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @LastEditTime: 2023-08-05 11:30:34
 * @FilePath: \dom\recruit-web\src\store\interviewSlice.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createSlice} from '@reduxjs/toolkit'
export const loginInfoSlice = createSlice({
    name: 'loginInfoSlice',
    initialState: {
        isSuperAdmin: false,
        groupId:''
    },
    reducers: {
        enterSuperAdmin(state,action){
            state.isSuperAdmin = true;
        },
        notSuperAdmin(state,action){
            state.isSuperAdmin = false;
        },
        setGroupId(state,action){
            state.groupId = action.payload
        }
    }
})

export const {enterSuperAdmin, notSuperAdmin,setGroupId} = loginInfoSlice.actions