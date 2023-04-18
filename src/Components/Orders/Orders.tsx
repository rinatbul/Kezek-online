import s from "./Orders.module.css";
import {OrderType} from "../../App";
import Lottie from "lottie-react";
import loading from '../../Lotties/loading.json'
import notFound from '../../Lotties/not-found.json'

type OrdersPropsType = {
    title: string
    orders: OrderType[]
    status: 'ready' | 'notReady'
    isLoading: boolean
}

const OrdersStyles = {
    ready: {
        backgroundColor: '#298000',
        borderColor: '#298000'
    },
    notReady: {
        backgroundColor: '#c25100',
        borderColor: '#c25100'
    }
}

export const Orders = (props: OrdersPropsType) => {

    const orders = props.orders.length ? (
        props.orders.map((order, index) => {
            return <div className={s.item}>
                <button key={index}
                        style={{borderColor: `${OrdersStyles[props.status].borderColor}`}}>{order.key}</button>
            </div>
        })
    ) : (<Lottie animationData={notFound} loop={false}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.header}
                 style={{backgroundColor: `${OrdersStyles[props.status].backgroundColor}`}}>
                {props.title}
            </div>
            <div className={props.isLoading || !props.orders.length ? s.flex: s.grid}
                 style={{borderColor: `${OrdersStyles[props.status].borderColor}`}}>
                {
                    props.isLoading ? <Lottie animationData={loading} loop={true} /> : orders
                }
            </div>
        </div>
    )
}