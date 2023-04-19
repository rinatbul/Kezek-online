import s from "./RestaurantsPage.module.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

type RestaurantType = {
    id: number
    title: string
    img: string
    url: string
}

export const RestaurantsPage = () => {
    const navigate = useNavigate()
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/')
            .then(response => response.json())
            .then(data => {
                setRestaurants(data)
            })
    }, [])


    return (
        <div className={s.wrapper}>

            {
                restaurants.map(r => {
                    return <div className={s.item} key={r.id}>
                        <h1>{r.title}</h1>
                        {/*<p>{r.url}</p>*/}
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