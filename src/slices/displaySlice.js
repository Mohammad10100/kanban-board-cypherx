import { createSlice } from '@reduxjs/toolkit'

const displayStateObj = {
    grouping:'status',
    ordering:'priority',
}

const initialState = {
    displayState: localStorage.getItem("displayState") ? JSON.parse(JSON.stringify(localStorage.getItem("displayState"))) : displayStateObj && localStorage.setItem('displayState', JSON.stringify(displayStateObj)),
}

const displaySlice = createSlice({
    name:'displayState',
    initialState:initialState,
    reducers:{
        setGrouping (state, value){
            let displayState = JSON.parse(localStorage.getItem("displayState"));
            displayState.grouping = value.payload;
            localStorage.setItem('displayState', JSON.stringify(displayState));
        },
        setOrdering (state, value){
            let displayState = JSON.parse(localStorage.getItem("displayState"));
            displayState.ordering = value.payload;
            localStorage.setItem('displayState', JSON.stringify(displayState));
        },
    }
})

export const { setGrouping, setOrdering } = displaySlice.actions
export default displaySlice.reducer