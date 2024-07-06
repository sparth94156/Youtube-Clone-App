import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './headerSlice'
import searchReducer from './searchSlice'
import chatReducer from './chatSlice'

export const appStore = configureStore({
    reducer:{
        header: headerReducer,
        search: searchReducer,
        chat: chatReducer
    }
   
})