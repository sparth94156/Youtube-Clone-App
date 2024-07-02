import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './headerSlice'
import searchReducer from './searchSlice'

export const appStore = configureStore({
    reducer:{
        header: headerReducer,
        search: searchReducer
    }
   
})