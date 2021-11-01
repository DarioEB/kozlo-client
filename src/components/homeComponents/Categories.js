import React, {useContext} from 'react';
// ExploreComponent
import Explore from './Explore';
// Link
import { Link } from 'react-router-dom';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
// Contexts prodctos
import productsContext from '../../contexts/products/productsContext';
import SwiperCore, {
    Pagination,
    Autoplay,
    Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Categories = ({categories}) => {

    const ProductsContext = useContext(productsContext);
    const { addFilterCategory, filters } = ProductsContext;

    const handleCategory = (category) => {
        if(!filters.find(filter => filter._id === category._id)) {
            addFilterCategory(category);
        }
    }

    return (
        <section className="section">
            <div className="container">
                <div className="title">
                    <h2>Categorías</h2>
                </div>
                <div className="content">
                    <div className="content-categories">
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
                        {categories.map( category => (
                            <SwiperSlide
                                key={category._id}
                            >
                                <Link
                                    to={'/products'}
                                    onClick={() => handleCategory(category)}
                                >
                                    <div className="box-slide">
                                        <div
                                            className="box-slide_image"
                                        >
                                            <img 
                                                src={`${process.env.REACT_APP_BACKEND_URL}/api/categories/get-image/${category.image}`}
                                                alt={`Imagen ${category.name}`}
                                            />
                                        </div>
                                        <div className="box-slide_name">
                                            <h4>{category.name}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                </div>
            </div>
            <Explore textExplore={'Explora nuestras categorías'} />
        </section>
    );
}

export default Categories;