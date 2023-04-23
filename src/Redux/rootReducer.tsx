import {combineReducers} from 'redux'
import {restaurantsPageReducer} from "./restaurantsPageReducer";

export const rootReducer = combineReducers({
    restaurants: restaurantsPageReducer
})