import React, { Fragment, useContext, useEffect } from 'react';
// Header
import Header from './layout/Header';
import categoriesContexts from '../contexts/categories/categoriesContext';

import authContext from '../contexts/auth/authContext';
import Loader from './layout/Loader';
// PaymentComponents
import './paymentComponents/paymentStyles.css';
import CheckoutConfirm from './paymentComponents/CheckoutConfirm';

import checkoutContext from '../contexts/checkout/checkoutContext';
import { useHistory } from 'react-router-dom';
const PaymentConfirm = () => {

    
    // History
    const history = useHistory();

    const CategoriesContext = useContext(categoriesContexts);
    const {getCategories, categories, loadCategories} = CategoriesContext;

    const AuthContext = useContext(authContext);
    const { authenticated, user, logout, authenticatedUser } = AuthContext; 

    // Contexts checkout
    const CheckoutContext = useContext(checkoutContext);
    const { 
        cart, 
        clientdata, 
        checkout, 
        token, card, 
        checkoutPayment, 
        shop, 
        loadShop,
        subtotal,
        shippingcost,
        totalcost
    } = CheckoutContext;

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        if(shop) { 
            history.push(`/order/${shop._id}`)
        } else if( cart.length === 0 || !card) {
            history.goBack();
        }
    }, [shop, history, cart, card]);


    if(loadCategories ||
        categories.length === 0 ||
        loadShop) {
            return <Loader />
        }
    

     const handleClickConfirmPayment = e => {
        e.preventDefault();
        // Últiumas validaciones
        checkoutPayment({clientdata, checkout, cart, user});
    }

    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            {
                card ?
                <CheckoutConfirm  
                user={user}
                cart={cart}
                handleClickConfirmPayment={handleClickConfirmPayment} 
                clientdata={clientdata}
                token={token}
                card={card}
                checkout={checkout}
                subtotal={subtotal}
                shippingcost={shippingcost}
                totalcost={totalcost}
                loadShop={loadShop}
            />: null
            }
        </Fragment>
    );
}

export default PaymentConfirm;