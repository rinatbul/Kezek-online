import {Orders} from "./Components/Orders/Orders";
import {useEffect, useState} from "react";
import {Slider} from "./Components/Slider/Slider";

export type OrderType = {
    id: number
    key: string
    is_ready: boolean
}

const slides = [
    {
        img_url:'https://images.unsplash.com/photo-1681238337874-c65010a35603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
        caption:'Image 1'
    },
    {
        img_url:'https://images.unsplash.com/photo-1681616679951-31dd84d5b6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        caption:'Image 2'
    },
    {
        img_url:'https://images.unsplash.com/photo-1681238339230-ad333583139e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80',
        caption:'Image 3'
    },
]

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
            <Slider slides={slides}/>
        </div>
    )
}

export default App
