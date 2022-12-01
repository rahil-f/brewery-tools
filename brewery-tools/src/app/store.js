import { configureStore } from '@reduxjs/toolkit';
import calcReducer from "../features/calc/calcSlice"
import themeReducer from "../features/themeMode/darkmodeSlice"

export const store = configureStore({
    reducer: {
        calc: calcReducer,
        theme: themeReducer,
    },
});