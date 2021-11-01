import React, { Fragment, useContext, useEffect } from 'react';
// Header
import Header from './layout/Header';
import categoriesContexts from '../contexts/categories/categoriesContext';

import authContext from '../contexts/auth/authContext';
import Loader from './layout/Loader';
// PaymentComponents
import ContentPayment from './paymentComponents/ContentPayment';
import './paymentComponents/paymentStyles.css';

const PaymentData = () => {

    const CategoriesContext = useContext(categoriesContexts);
    const {getCategories, categories, loadCategories} = CategoriesContext; 

    const AuthContext = useContext(authContext);
    const { authenticatedUser, authenticated, user, logout } = AuthContext; 

    useEffect( () => {
        if(!document.querySelector('script[src="https://sdk.mercadopago.com/js/v2"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://sdk.mercadopago.com/js/v2';
            // script.addEventListener('load', addCheckout);
            document.body.appendChild(script);
        } 
<<<<<<< HEAD
        if(!document.querySelector('script[src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js';
            document.body.appendChild(script);
        }
=======
>>>>>>> 409ad7fccffffc80d305394200ae77a1c9568eb2
    }, []);
    
    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, [authenticated])
    

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
            <ContentPayment 
                user={user}
            />
            
        </Fragment>
    );
}

export default PaymentData;