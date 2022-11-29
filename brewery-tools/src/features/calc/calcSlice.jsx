import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
    DI: null,
    DF: null,
    Temperature: null,
    },
    reducers: {
        setDI: (state, action) => {
            state.DI = action.payload;
        },
        setDF: (state, action) => {
            state.DF = action.payload;
        },
        setTemperature: (state, action) => {
            state.Temperature = action.payload;
        },
    }
})

export const { 
    setDI,
    setDF,
    setTemperature
} = calcSlice.actions

export default calcSlice.reducer