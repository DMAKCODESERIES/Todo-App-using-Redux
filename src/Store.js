import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../src/App/features/todo/todoSlice'
export const store=configureStore({
    reducer:todoReducer
})