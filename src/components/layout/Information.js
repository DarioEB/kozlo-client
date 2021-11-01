import React from 'react';

// Swiper
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
const Information = () => {

    const information = [
        { title: 'Envíos a toda la provincia', icon: 'fas fa-truck' },
        { title: 'Devolución dentro de los 15 días', icon: 'fas fa-undo-alt' },
        { title: 'Envíos inmediatos', icon: 'fas fa-spinner' },
        { title: 'Todos los medíos de pagos', icon: 'far fa-credit-card' }
    ]

    return (
        <section className="section section-information">
            <div className="container">
                <div className="">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        autoplay={true}
                        loop={true}
                        breakpoints={{
                            "768": {
                                "slidesPerView": 4,
                                "spaceBetween": 0
                            }
                        }}
                    >
                        {information.map((info, i) => (
                            <SwiperSlide
                                key={i}
                            >
                                <div
                                    className="box-info"
                                >
                                    <i className={info.icon}></i>
                                    <p>{info.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
}

export default Information;