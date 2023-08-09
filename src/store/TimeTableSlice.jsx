import { createSlice } from '@reduxjs/toolkit'
import { useGetFirstDataQuery,useGetSecondDataQuery } from './timeTableApi'

export const timeTableSlice = createSlice({
    name: 'timeTableSlice',
    initialState: {
        firstData: [],
        // firstData: useGetFirstDataQuery(),
        secondData: [],
        // secondData: useGetSecondDataQuery(),
        showData: [],
        daySelected: 'first',
        searchGroup: '',
        isGroupChange: false,
        selectedGroup: [],
    },
    reducers: {
        // 切换展示第一天/第二天的数据
        changeDaySelected: (state) => {
            if (state.daySelected === 'first') {
                state.daySelected = 'second'
                state.showData = state.secondData
            } else {
                state.daySelected = 'first'
                state.showData = state.firstData
            }
        },
        // 处理搜索事件
        handleSearch: (state, action) => {
            state.searchGroup = action.payload
            if (state.firstData.findIndex((obj) => obj["groupNum"] === state.searchGroup) !== -1 || state.searchGroup === '') {
                state.daySelected = 'first'
                state.showData = state.firstData
            } else if (state.secondData.findIndex((obj) => obj["groupNum"] === state.searchGroup) !== -1) {
                state.daySelected = 'second'
                state.showData = state.secondData
            }else {
                alert("不存在该组号，请重新查询")
            }
            let index = state.showData.findIndex((obj) => obj["groupNum"] === state.searchGroup)
            if (index !== -1) {
                state.showData = [
                    ...state.showData.slice(index, index + 1),
                    ...state.showData.slice(0, index),
                    ...state.showData.slice(index + 1)
                ]   
            }
        },
        // 设置是否在换班状态
        changeIsGroupChange: (state) => {
            state.isGroupChange = !state.isGroupChange
        },
        // 获取换班的两个组的组号
        changeSelectedGroup: (state, action) => {
            state.selectedGroup = action.payload
        },
        // 处理第一天排班事件
        handleFirstArrange: (state) => {
            //发送为第一天排班
            if (confirm("是否为第一天排班？")) {
                state.firstData = [
                    {
                        key: '1',
                        groupNum: '1',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座1号',
                    },
                    {
                        key: '2',
                        groupNum: '2',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座2号',
                    },
                    {
                        key: '3',
                        groupNum: '3',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座3号',
                    },
                    {
                        key: '4',
                        groupNum: '4',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座4号',
                    },
                    {
                        key: '5',
                        groupNum: '5',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座5号',
                    },
                    {
                        key: '6',
                        groupNum: '6',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座6号',
                    },
                    {
                        key: '7',
                        groupNum: '7',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座1号',
                    },
                    {
                        key: '8',
                        groupNum: '8',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座2号',
                    },
                    {
                        key: '9',
                        groupNum: '9',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座3号',
                    },
                    {
                        key: '10',
                        groupNum: '10',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座4号',
                    },
                    {
                        key: '11',
                        groupNum: '11',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座5号',
                    },
                    {
                        key: '12',
                        groupNum: '12',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座6号',
                    },
                ]
                state.showData = state.firstData
                state.daySelected = 'first'
            }
        },
        // 处理第二天排班事件
        handleSecondArrange: (state) => {
            //发送为第二天排班
            if (confirm("是否为第二天排班？")) {
                state.secondData = [
                    {
                        key: '13',
                        groupNum: '13',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座1号',
                    },
                    {
                        key: '14',
                        groupNum: '14',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座2号',
                    },
                    {
                        key: '15',
                        groupNum: '15',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座3号',
                    },
                    {
                        key: '16',
                        groupNum: '16',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座4号',
                    },
                    {
                        key: '17',
                        groupNum: '17',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座5号',
                    },
                    {
                        key: '18',
                        groupNum: '18',
                        beginTime: '8:00',
                        endTime: '9:00',
                        place: '卡座6号',
                    },
                    {
                        key: '19',
                        groupNum: '19',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座1号',
                    },
                    {
                        key: '20',
                        groupNum: '20',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座2号',
                    },
                    {
                        key: '21',
                        groupNum: '21',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座3号',
                    },
                    {
                        key: '22',
                        groupNum: '22',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座4号',
                    },
                    {
                        key: '23',
                        groupNum: '23',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座5号',
                    },
                    {
                        key: '24',
                        groupNum: '24',
                        beginTime: '9:00',
                        endTime: '10:00',
                        place: '卡座6号',
                    },
                ]
                state.showData = state.secondData
                state.daySelected = 'second'   
            }
        },
    }
})

export const {
    changeDaySelected,
    handleSearch,
    changeIsGroupChange,
    changeSelectedGroup,
    handleFirstArrange,
    handleSecondArrange,
} = timeTableSlice.actions 