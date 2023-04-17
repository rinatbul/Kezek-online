import s from "./Orders.module.css";
import {OrderType} from "../../App";

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
    ) : (<div>Not found</div>)
    return (
        <div className={s.wrapper}>
            <div className={s.header}
                 style={{backgroundColor: `${OrdersStyles[props.status].backgroundColor}`}}>
                {props.title}
            </div>
            {
                props.isLoading ? <div>Loading...</div> : orders
            }

        </div>
    )
}