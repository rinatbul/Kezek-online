import {Orders} from "./Components/Orders/Orders";
import {useEffect, useState} from "react";

export type OrderType = {
    id: number
    key: string
    is_ready: boolean
}

function App() {
    const [orders, setOrders] = useState<OrderType[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/1/orders/')
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setOrders(data.orders)
                setTimeout(()=>{
                    setLoading(false)
                },2000)
            })
            .catch(error => console.error(error))
    }, [])

    const completeOrders = orders.filter(order => order.is_ready)
    const inProgressOrders = orders.filter(order => !order.is_ready)


    return (
        <div className="App">
            <Orders orders={inProgressOrders}
                    title={'Готовятся'}
                    status={'notReady'}
                    isLoading={loading}/>
            <Orders orders={completeOrders}
                    title={'Готовы'}
                    status={'ready'}
                    isLoading={loading}/>
        </div>
    )
}

export default App
