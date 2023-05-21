import {combineReducers} from 'redux'
import {restaurantsPageReducer} from "./restaurantsPageReducer";
import {restaurantReducer} from "./restaurantReducer";

export const rootReducer = combineReducers({
    restaurants: restaurantsPageReducer,
    orders:restaurantReducer
})