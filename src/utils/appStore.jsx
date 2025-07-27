import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import todoReducer from "./todoSlice"

const appStore = configureStore({
    reducer : {
        counter : counterReducer,
        todo : todoReducer

    }
})

export default appStore;