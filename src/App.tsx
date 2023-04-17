import {Orders} from "./Components/Orders/Orders";
import {useEffect, useState} from "react";

export type OrderType = {
    id:number
    key:string
    is_ready:boolean
}

function App() {
    const [orders,setOrders] =useState<OrderType[]>([])

    useEffect(()=>{
        fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/1/orders/')
            .then(response =>response.json())
            .then(data => setOrders(data.orders))
            .catch(error=>console.error(error))
    },[])

    const completeOrders = orders.filter(order=>order.is_ready)
    const inProgressOrders = orders.filter(order=>!order.is_ready)

    return (
        <div className="App">
            <Orders orders={inProgressOrders}/>
            <Orders orders={completeOrders}/>
        </div>
    )
}

export default App
