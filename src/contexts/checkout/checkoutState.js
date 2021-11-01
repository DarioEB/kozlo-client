import React, { useReducer } from 'react';
import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    HANDLE_CHANGE_DATA,
    ADD_PRODUCT_TO_CART,
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_ERROR,
    GET_CART,
    GET_CART_ERROR,
    GET_CART_SUCCESS,
    CLEAN_CHECKOUT,
    REMOVE_PRODUCT_TO_CART,
    REMOVE_PRODUCT_TO_CART_SUCCESS,
    SET_CHECKOUT_DATA,
    CHECKOUT,
    CHECKOUT_SUCCESS,
    CHECKOUT_ERROR,
    SET_SHIPPING_COST,
    CLEAN_CHECKOUT_SUCCESS
} from '../../types';
import checkoutReducer from './checkoutReducer';
import checkoutContext from './checkoutContext';
// import axios from 'axios';
import client from '../../config/axios';
const CheckoutState = ({children}) => {

    const initialState = {
        cart: {
            products: []
        },
        loadCart: null,
        errorCart: null,
        subtotal: 0,
        shippingcost: 0,
        totalcost: 0,
        clientdata: {
            email: '',
            country: 'Argentina',
            zip: '',
            name: '',
            surname: '',
            phone: '',
            street: '',
            number: '',
            department: '',
            suburb: '',
            city: '',
            province: '',
            dnicuil: '',
        },
        card: null,
        checkout: null,
        token: null,
        shop: null,
        loadShop: null,
        errorShop: null
    }

    const [state, dispatch] = useReducer(checkoutReducer, initialState);

    const handleChangeClientData = (e) => {
        dispatch({
            type: HANDLE_CHANGE_DATA,
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const handleShippingCost = (value) => {
        let cost;
        let zip;
        if(value === '3360') {
            cost = 250;
            zip = value;
        } else if (value === '0') {
            cost = 0;
            zip = '';
        } else {
            cost = 500
            zip = value;
        }
        dispatch({
            type: SET_SHIPPING_COST,
            payload: {cost: Number(cost), zip}
        })
    }
    
    const checkoutPayment = async (data) => {
        dispatch({
            type: CHECKOUT
        });
        try {
            const response = await client.post('/api/process-payment', data);
            dispatch({
                type: CHECKOUT_SUCCESS,
                payload: response.data
            });
        } catch (error ) {
            console.error('Error al realizar el pago', error);
            dispatch({
                type: CHECKOUT_ERROR
            })
        }
    }

    const setCheckoutData = async (payment, token, card) => {
        dispatch({
            type: SET_CHECKOUT_DATA,
            payload: {
                payment,
                token,
                card
            }
        })
    }

    const getCart = async (user) => {
        dispatch({
            type: GET_CART
        });
        try {
            const response = await client.get(`/api/carts/${user.cart}`);
            dispatch({
                type: GET_CART_SUCCESS,
                payload: response.data.cart
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_CART_ERROR
            })
        }
    }

    const addProductToCart = async (product, user) => {
        dispatch({
            type: ADD_PRODUCT_TO_CART
        });

        try {
            const response = await client.post(`/api/carts/${user.cart}`, product);
            dispatch({
                type: ADD_PRODUCT_TO_CART_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ADD_PRODUCT_TO_CART_ERROR
            })
        }
    } 

    const addProductCart = async (product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        });
    }

    const removeProductToCart = async (cart) => {
        dispatch({
            type: REMOVE_PRODUCT_TO_CART
        });
        try {
            const response = await client.put(`/api/carts/${cart._id}`, cart);
            dispatch({
                type: REMOVE_PRODUCT_TO_CART_SUCCESS,
                payload: response.data.cart
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removeProductCart = async (product) => {
        dispatch({
            type: REMOVE_TO_CART,
            payload: product
        })
    }

    const cleanCheckout = () => {
        dispatch({
            type: CLEAN_CHECKOUT
        })
    }

    const cleanCheckoutSuccess = async () => {
        dispatch({
            type: CLEAN_CHECKOUT_SUCCESS
        });
    }

    

    return (
        <checkoutContext.Provider
            value={{
                cart: state.cart,
                loadCart: state.loadCart,
                errorCart: state.errorCart,
                subtotal: state.subtotal,
                shippingcost: state.shippingcost,
                totalcost: state.totalcost,
                clientdata: state.clientdata,
                checkout: state.checkout,
                card: state.card,
                shop: state.shop,
                loadShop: state.loadShop,
                errorShop: state.errorShop,
                handleChangeClientData,
                checkoutPayment,
                addProductToCart,
                addProductCart,
                removeProductToCart,
                removeProductCart,
                getCart,
                cleanCheckout,
                setCheckoutData,
                handleShippingCost,
                cleanCheckoutSuccess
            }}
        >
            {children}
        </checkoutContext.Provider>
    );
}

export default CheckoutState;