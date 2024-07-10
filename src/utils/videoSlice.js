import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'video',
    initialState: {
        popularVideos: []
    },
    reducers: {
        addVideos : (state,action) => {
            state.popularVideos = action.payload
        }
    }
})

export const { addVideos } = videoSlice.actions

export default videoSlice.reducer