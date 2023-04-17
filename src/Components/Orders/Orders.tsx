import s from "./Orders.module.css";
import {OrderType} from "../../App";

type OrdersPropsType = {
    orders: OrderType[]
}

export const Orders = (props: OrdersPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>Готовятся</div>
            <div className={s.orders_wrapper}>
                {props.orders.map((order, index) => {
                    return <div className={s.item}>
                        <button key={index}>{order.key}</button>
                    </div>
                })}
            </div>
        </div>
    )
}