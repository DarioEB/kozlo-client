import React, { Fragment, useContext, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Loader from './layout/Loader';
import ContentOrder from './ordersComponents/ContentOrder';
import Information from './layout/Information';
import Whatsapp from './layout/Whatsapp';
import { useParams } from 'react-router-dom';
import categoriesContext from '../contexts/categories/categoriesContext';
import orderContext from '../contexts/orders/orderContext';
import authContext from '../contexts/auth/authContext';
import checkoutContext from '../contexts/checkout/checkoutContext';
import './ordersComponents/ordersStyles.css';
const Order = () => {
    const { id } = useParams();
    // Context de categoria
    const CategoriesContext = useContext(categoriesContext);
    const { getCategories, categories, loadCategories } = CategoriesContext;
    // Context de autenticacion
    const AuthContext = useContext(authContext);
    const { authenticatedUser, authenticated, user, logout } = AuthContext;
    // Context de (compras)
    const OrderContext = useContext(orderContext);
    const { loadOrder, order, getOrder } = OrderContext;
    // Context Checkout
    const CheckoutContext = useContext(checkoutContext);
    const { cleanCheckoutSuccess } = CheckoutContext;

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        getOrder(id);
        // eslint-disable-next-line
    }, [id]);

    useEffect(() => {
        cleanCheckoutSuccess();
        // eslint-disable-next-line
    }, [])

    if(
        loadCategories ||
        categories.length === 0 ||
        loadOrder || 
        order === null
    ) return <Loader />

    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <Whatsapp />
            <ContentOrder 
                order={order}
            />
            <Information />
            <Footer />
        </Fragment>
    );
}

export default Order;