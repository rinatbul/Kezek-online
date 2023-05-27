import s from './Restaurant.module.css'
import {useEffect, useState} from "react";
import {Orders} from "../../Components/Orders/Orders";
import {Slider} from "../../Components/Slider/Slider";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../main";
import {fetchOrders} from "../../Redux/restaurantReducer";

export type OrderType = {
    id: number
    key: string
    is_ready: boolean
}

const slides = [
    {
        img_url: 'https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption: 'Image 1'
    },
    {
        img_url: 'https://images.unsplash.com/photo-1678124620664-8b86d2b7de36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption: 'Image 2'
    },
    {
        img_url: 'https://images.unsplash.com/photo-1677414519330-b95a8ee85c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption: 'Image 3'
    },
]

export const Restaurant = () => {
    const dispatch = useDispatch<any>();
    const orders = useSelector((state:RootState)=>state.orders)
    const isLoading = useSelector((state:RootState)=>state.restaurants.isLoading)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (params.id) {
                dispatch(fetchOrders(params.id))
            }
        }, 3000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const completeOrders = orders.orders.filter(order => order.is_ready)
    const inProgressOrders = orders.orders.filter(order => !order.is_ready)

    const onItemClick = (id: number, is_ready:boolean) => {
        fetch(`https://online-kezek-test-production-5624.up.railway.app/api/orders/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                is_ready: is_ready
            })
        })
            .then(res => res.json())
            .then((data: any) => {
            })
    }

    return (
        <div>
            <button className={s.button} onClick={() => {
                navigate(`/restaurants`)
            }}>Back to restaurants
            </button>
            <Orders orders={inProgressOrders}
                    title={'Готовятся'}
                    status={'notReady'}
                    isLoading={isLoading}
                    onClick={onItemClick}/>
            <Orders orders={completeOrders}
                    title={'Готовы'}
                    status={'ready'}
                    isLoading={isLoading}
                    onClick={onItemClick}/>
            <Slider slides={slides}/>
        </div>
    )
}