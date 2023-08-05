import { createSlice } from "@reduxjs/toolkit";

export const interviewSlice = createSlice({
    name: 'interviewSlice',
    initialState: {
        name: 'hhhh'
    },
    reducers: {
        setName(state, action) {
            state.name = 'dhh'
        }
    },

})

export const { setName } = interviewSlice.actions