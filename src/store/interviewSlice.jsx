import { createSlice } from "@reduxjs/toolkit";

/*
 * @Author: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @Date: 2023-08-04 21:44:32
 * @LastEditors: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @LastEditTime: 2023-08-05 10:32:35
 * @FilePath: \dom\recruit-web\src\store\interviewSlice.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const interviewSlice = createSlice({
    name: 'interviewSlice',
    initialState: {
        isEnterBackdrop: false,
    },
    reducers: {
        showBackdrop(state,action) {
            state.isEnterBackdrop = true
        },
        hiddenBackdrop(state, action) {
            state.isEnterBackdrop = false
        }
    }
})

export const {showBackdrop, hiddenBackdrop} = interviewSlice.actions

