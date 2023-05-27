import {RestaurantType} from "../Pages/RestaurantsPage/RestaurantsPage";
import {Dispatch} from "redux";
import {restaurantsApi} from "../asyncActions/restaurants";

export type SetRestaurantsAction= {
    type: 'GET-RESTAURANTS'
    payload:RestaurantType[]
    // payload: {[key: number]: RestaurantType}
}


type RestaurantsPageReducerInitStateType = {
    restaurants:  RestaurantType[];
    isLoading: boolean;
}
const restaurantsPageReducerInitState: RestaurantsPageReducerInitStateType = {
    restaurants:  [],
    isLoading: false
}
export const restaurantsPageReducer = (state: RestaurantsPageReducerInitStateType = restaurantsPageReducerInitState,
                                       action:SetRestaurantsAction):RestaurantsPageReducerInitStateType => {
    console.log('restPageReducer ',action)
    switch (action.type){
        case 'GET-RESTAURANTS':
            return {...state, restaurants: action.payload}
        default:
            return state;
    }
    return state;
}

export const fetchRestaurants=()=>(dispatch:Dispatch)=>{
    restaurantsApi.get()
        .then(data => {
            console.log('restaurants ', data)
            dispatch({type:'GET-RESTAURANTS', payload:data})
        })
}

// TODO: 1. state редусера был обьектом а не массивом, обьект, ключ который массив данных ключ
//  restaurants. (сделать объект с ключем restaurants значением массив, для того чтобы добавить
//  доп поля. к примеру isLoading)
// TODO 2. добавить лоадин на ресторанпэйдж. isRestaurantsLoading true/false
// TODO 3. добавить thunk в get-restaurants