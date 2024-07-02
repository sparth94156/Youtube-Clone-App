import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:'header',
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        showMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    }
})

export const { showMenu } = headerSlice.actions

export default headerSlice.reducer