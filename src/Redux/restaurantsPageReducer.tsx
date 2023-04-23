import {RestaurantType} from "../Pages/RestaurantsPage/RestaurantsPage";

export type SetRestaurantsAction= {
    type: 'GET-RESTAURANTS'
    payload:RestaurantType[]
}

export const restaurantsPageReducer = (state:RestaurantType[]=[], action:SetRestaurantsAction):RestaurantType[] => {
    console.log('restPageReducer ',action)
    switch (action.type){
        case 'GET-RESTAURANTS':
            return action.payload;
        default:
            return state;
    }

    return state;
}

// TODO: 1. state редусера был обьектом а не массивом, обьект, ключ который массив данных
// TODO 2. добавить лоадин на ресторанпэйдж. isRestaurantsLoading true/false
// TODO 3. добавить thunk в get-restaurants