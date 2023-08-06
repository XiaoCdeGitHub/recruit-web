import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'listSlice',
    initialState: {
        list: [
            {
                id: '01',
                name: "小段子",
                cardId: "2022005186",
                interviewer: "小王子",
                result: "true",
                subject: "Math",
                review: '5分',
                count: "4分"
            },
            {
                id: '02',
                name: "孙悟空",
                cardId: "2013003456",
                interviewer: "猪八戒",
                result: "false",
                subject: "English",
                review: '5分',
                count: "4分"

            },
            {
                id: '03',
                name: "沙师弟",
                cardId: "2013007890",
                interviewer: "猪八戒",
                result: "false",
                subject: "Chinese",
                review: '5分',
                count: "4分"

            },

        ],
        list2: [
            {
                id: '02',
                name: "孙悟空",
                cardId: "2013003456",
                interviewer: "猪八戒",
                result: "false",
                subject: "English",
                review: '5分',
                count: "4分"

            },
            {
                id: '03',
                name: "沙师弟",
                cardId: "2013007890",
                interviewer: "猪八戒",
                result: "false",
                subject: "Chinese",
                review: '5分',
                count: "4分"

            },
        ],
        BackUp: [
            {
                id: '01',
                name: "小段子",
                cardId: "2022005186",
                interviewer: "小王子",
                result: "true",
                subject: "Math",
                review: '5分',
                count: "4分"

            },
            {
                id: '02',
                name: "孙悟空",
                cardId: "2013003456",
                interviewer: "猪八戒",
                result: "false",
                subject: "English",
                review: '5分',
                count: "4分"

            },
            {
                id: '03',
                name: "沙师弟",
                cardId: "2013007890",
                interviewer: "猪八戒",
                result: "false",
                subject: "Chinese",
                review: '5分',
                count: "4分"

            },

        ],
        isEnterBackdrop: true,
        isAdmin: true
    },
    reducers: {
        handlePassView(state, action) {
            console.log('lalalala')
            state.list = action.payload
        },
        setList(state, action) {
            // console.log('lalalala')  
            state.list = action.payload
        },
        // 做一个遮罩层先咯
        // showBackdrop(state,action) {
        //     state.isEnterBackdrop = true
        // },
        // hiddenBackdrop(state, action) {
        //     state.isEnterBackdrop = false
        // }

    },

})

export const { setList, handlePassView, showBackdrop, hiddenBackdrop } = listSlice.actions
export const { reducer: listReducer } = listSlice