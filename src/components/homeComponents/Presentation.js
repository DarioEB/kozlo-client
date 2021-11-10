import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, {
    Pagination,
    Autoplay,
    Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Presentation = () => {

    return (
        <section className="swiper-slide-home section">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={true}
                loop={true}
            >
                <SwiperSlide>
                    <div className="home-slide home-slide_uno"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-slide home-slide_dos"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-slide home-slide_tres"></div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Presentation;