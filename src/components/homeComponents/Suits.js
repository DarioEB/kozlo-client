import React from 'react';
// ExploreComponent
import Explore from './Explore';
// Link
import { Link } from 'react-router-dom';
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

const Suits = ({ products }) => {

    const suitsProducts = products.filter( product => product.category.name === 'Trajes');

    return (
        <section className="section">
            <div className="container">
                <div className="title">
                    <h2>Sacos y Ambos</h2>
                </div>
                <div className="content">
                    <div className="content-outstanding">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={true}
                            navigation={true}
                            loop={true}
                            breakpoints={{
                                "768": {
                                    "slidesPerView": 4,
                                    "spaceBetween": 50
                                }
                            }}
                        >
                            {suitsProducts.map(product => (
                                <SwiperSlide
                                    key={product._id}
                                >
                                    <Link
                                        to={`/product/${product._id}`}
                                    >
                                        <div className="box-slide">
                                            <div
                                                className="box-slide_image"
                                            >
                                                <img
                                                    src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                                                    alt={`Imagen ${product.name}`}
                                                />
                                            </div>
                                            <div className="box-slide_name">
                                                <h4>{product.name}</h4>
                                                <p className="brand">{product.brand}<i className="fas fa-tag"></i></p>
                                                <div className="prices">
                                                {product.discount > 0 ?
                                                        <>
                                                            <p className="p-origin">$ {(product.price).toFixed(2)}</p>
                                                            <p className="p-discount">${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</p>    
                                                        </> :
                                                        <p className="p-discount">$ {(product.price).toFixed(2)}</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <Explore textExplore={'Explorá nuestras distintas opciones en trajes'} />
        </section>
    );
}

export default Suits;