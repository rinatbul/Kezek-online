import {OrderType} from "../Pages/Restaurant/Restaurant";
import {Dispatch} from "redux";
import {RestaurantType} from "../Pages/RestaurantsPage/RestaurantsPage";

export type GAQdersAction = {
    type: 'GET-ORDERS'
    payload: OrderType[]
}
type OrdersReducerInitStateType = {
    orders:  OrderType[];
    isLoading: boolean;
}

type ActionType =  GAQdersAction | ReturnType<typeof setIsLoadingAC>


const ordersReducerInitState: OrdersReducerInitStateType = {
    orders:  [],
    isLoading: false
}
export const restaurantReducer = (state: OrdersReducerInitStateType = ordersReducerInitState, action: ActionType): OrdersReducerInitStateType => {
    console.log('orders reducer >> ',action)
    switch (action.type){
        case 'GET-ORDERS':
            return {...state, orders: action.payload};
        case 'IS-LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}
const setIsLoadingAC = (isLoading: boolean) => ({type: "IS-LOADING", isLoading} as const)
export const fetchOrders = (id: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    fetch(`https://online-kezek-test-production-5624.up.railway.app/api/restaurants/${id}/orders/`)
        .then(response => response.json())
        .then(data =>{
            console.log('Orders >>> ',data.orders)
            console.log('is Ready orders >> ', data.orders.map((o:any)=>o.is_ready))
            dispatch({type:'GET-ORDERS',payload:data.orders})
        })
        .finally(() => {
            dispatch(setIsLoadingAC(false))
        })
}