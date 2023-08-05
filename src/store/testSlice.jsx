import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: 'testSlice',
    reducers: {
        setName(state,action) {
            state.name = 'dhh'
        }
    },
    initialState: {
        name: 'hhhh'
    }
})


export const { setName } = testSlice.actions
