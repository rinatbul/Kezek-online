import s from './Slider.module.css'
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Autoplay} from "swiper";

type SliderPropsType={
    slides:ImagesPropsType[]
}
type ImagesPropsType={
    img_url:string
    caption:string
}

export const Slider = (props:SliderPropsType) => {

    return (
        <Swiper className={s.swiper}
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{delay: 1000}}
        >
            {props.slides.map((slide)=>{
                return <SwiperSlide><img className={s.images} src={slide.img_url} alt={slide.caption}/></SwiperSlide>
            })}
        </Swiper>
    );
}