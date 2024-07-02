import { createSlice, isAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheResult: (state, action) => {
            state = Object.assign(state, action.payload)    // Merge state to action.payload
            // state = {...action.payload}
        }
    }
})

export default searchSlice.reducer

export const { cacheResult } = searchSlice.actions

// state = {...action.payload}   we are spreding an object

/*
{
    0 : {
    ip:[]
    },
    1: {
    iph: []
    }

}
*/
