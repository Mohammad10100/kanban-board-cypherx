import {combineReducers} from '@reduxjs/toolkit'
import themeReducer from '../slices/themeSlice'
import displayReducer from '../slices/displaySlice'

const rootReducer = combineReducers({
    theme:themeReducer,
    displayState:displayReducer,
})

export default rootReducer
