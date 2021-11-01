import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Contexts
import categoriesContext from '../contexts/categories/categoriesContext';
import productsContext from '../contexts/products/productsContext';
import authContext from '../contexts/auth/authContext';
// Header
import Header from './layout/Header';
import Footer from './layout/Footer';
import Loader from './layout/Loader';
import ContentProduct from './productComponents/ContentProduct'
import Information from './layout/Information';
// Styles
import './productComponents/productStyles.css';

const Product = () => {

    const { id } = useParams();

    const CategoriesContext = useContext(categoriesContext);
    const { getCategories, categories, loadCategories } = CategoriesContext;
    
    const ProductsContext = useContext(productsContext);
    const { getProduct, loadProduct, product} = ProductsContext;

    const AuthContext = useContext(authContext);
    const { authenticatedUser, authenticated, user, logout } = AuthContext; 
    
    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, [authenticated])
    
    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        const requestProduct = () => {
           getProduct(id);
        } 
        requestProduct();
        // eslint-disable-next-line
    }, [id]);

    if(loadCategories ||
         categories.length === 0 ||
         loadProduct || 
         !product ) return <Loader />;

    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <ContentProduct 
                product={product}
                authenticated={authenticated}
                user={user}
            />
            <Information />
            <Footer />
        </Fragment>
    );
}

export default Product;