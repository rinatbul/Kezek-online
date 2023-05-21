import {OrderType} from "../Pages/Restaurant/Restaurant";

export type getOrdersAction = {
    type: 'GET-ORDERS' | 'IS-LOADING'
    payload: OrderType[]
}

export const restaurantReducer = (state: OrderType[] = [], action: getOrdersAction): OrderType[] => {
    console.log('orders reducer >> ',action)
    switch (action.type){
        case 'GET-ORDERS':
            return action.payload;
        case 'IS-LOADING':
            return state
        default:
            return state
    }
}