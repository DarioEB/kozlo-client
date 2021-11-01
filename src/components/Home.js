import React, { Fragment, useContext, useEffect } from 'react';
import './homeComponents/homeStyles.css';
import Header from './layout/Header';
import Whatsapp from './layout/Whatsapp';
import Presentation from './homeComponents/Presentation';
import Information from './layout/Information';
import ElegantPresentation from './homeComponents/ElegantPresentation';
import Categories from './homeComponents/Categories';
import UrbanPresentation from './homeComponents/UrbanPresentation';
import Outstading from './homeComponents/Outstanding';
import AboutPresentation from './homeComponents/AboutPresentation';
import Newsletter from './homeComponents/Newsletter';
import Footer from './layout/Footer';
import Loader from './layout/Loader';

// Contexts
import categoriesContext from '../contexts/categories/categoriesContext';
// Context de Products
import productsContext from '../contexts/products/productsContext';
// Context de autenticacion 
import authContext from '../contexts/auth/authContext';
const Home = () => {

    const CategoriesContext = useContext(categoriesContext);
    const {getCategories, categories, loadCategories} = CategoriesContext;
    
    const ProductsContext = useContext(productsContext);
    const { getProducts, products } = ProductsContext; 

    const AuthContext = useContext(authContext);
    const { authenticatedUser, authenticated, user, logout } = AuthContext; 

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, [authenticated])

    useEffect( () => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    if(loadCategories || categories.length === 0) return <Loader />;
    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <Whatsapp />
            <Presentation />
            <Information />
            <ElegantPresentation />
            <Categories
                categories={categories}
            />
            <UrbanPresentation />
            <Outstading
                products={products}
            />
            <AboutPresentation />
            <Newsletter />
            <Footer />
        </Fragment>        
    );
}

export default Home;