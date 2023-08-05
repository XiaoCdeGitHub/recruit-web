import {createSlice} from '@reduxjs/toolkit'
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