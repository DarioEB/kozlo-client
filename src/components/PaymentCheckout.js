import React, { Fragment, useContext, useEffect } from 'react';
// Header
import Header from './layout/Header';
import categoriesContexts from '../contexts/categories/categoriesContext';

import authContext from '../contexts/auth/authContext';
import Loader from './layout/Loader';
// PaymentComponents
import './paymentComponents/paymentStyles.css';
import CheckoutData from './paymentComponents/CheckoutData';

const PaymentCheckout = () => {

    const CategoriesContext = useContext(categoriesContexts);
    const {getCategories, categories, loadCategories} = CategoriesContext;

    const AuthContext = useContext(authContext);
    const { authenticated, user, logout } = AuthContext; 

    useEffect( () => {
        if(!document.querySelector('script[src="https://sdk.mercadopago.com/js/v2"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://sdk.mercadopago.com/js/v2';
            // script.addEventListener('load', addCheckout);
            document.body.appendChild(script);
        } 
        
    }, []);
    
    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    if(loadCategories ||
        categories.length === 0) {
            return <Loader />
        }
    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <CheckoutData />
        </Fragment>
    );
}

export default PaymentCheckout;