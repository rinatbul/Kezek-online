import s from "./RestaurantsPage.module.css";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../main";
import { fetchRestaurants } from "../../Redux/restaurantsPageReducer";

export type RestaurantType = {
    id: number
    title: string
    img: string
    url: string
}

export const RestaurantsPage = () => {
    const dispatch = useDispatch<any>()
    const restaurants = useSelector((state:RootState) => state.restaurants);
    const navigate = useNavigate()

    // useEffect(() => {
    //     fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('restaurants ', data)
    //             dispatch({type:'GET-RESTAURANTS', payload:data})
    //         })
    // }, [])

    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [])


    return (
        <div className={s.wrapper}>
            {
                restaurants.map(r => {
                    return <div className={s.item} key={r.id}>
                        <h1>{r.title}</h1>
                        <img className={s.image} src={r.img} alt='RestaurantImg'/>

                        <button className={s.button}
                                onClick={() => {
                                    navigate(`${r.id}`)
                                }}>
                            Go to restaurant
                        </button>
                    </div>
                })
            }
        </div>
    )
}