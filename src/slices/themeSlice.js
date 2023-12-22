import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: localStorage.getItem("theme") ? JSON.parse(JSON.stringify(localStorage.getItem("theme"))) : 'light' && localStorage.setItem('theme', JSON.stringify('light')),
}

const themeSlice = createSlice({
    name:'theme',
    initialState:initialState,
    reducers:{
        setTheme (state, value){
            state.theme = value.payload;
            localStorage.setItem('theme', JSON.stringify(value.payload));
        },
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer