import React, {useReducer} from 'react';
import orderReducer from './orderReducer';
import orderContext from './orderContext';
import client from '../../config/axios';
import {
    GET_ORDER,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_ERROR
} from '../../types';
const OrderState = ({children}) => {

    const initialState = {
        order: null,
        loadOrder: null,
        errorOrder: null,
        orders: [],
        loadOrders: null,
        errorOrders: null
    }

    const [state, dispatch] = useReducer(orderReducer, initialState);

    const getOrder = async (id) => {
        dispatch({
            type: GET_ORDER
        });
        try {
            const response = await client.get(`/api/orders/order/${id}`);
            dispatch({
                type: GET_ORDER_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_ORDER_ERROR
            })
        }
    }

    const getOrders = async () => {
        dispatch({
            type: GET_ORDERS
        });
        try {
            const response = await client.get('/api/orders');
            dispatch({
                type: GET_ORDERS_SUCCESS,
                payload: response.data
            })
        } catch(error) {
            dispatch({
                type: GET_ORDERS_ERROR
            })
        }
    }

    return (
        <orderContext.Provider
            value={{
                order: state.order,
                loadOrder: state.loadOrder,
                errorOrder: state.errorOrder,
                orders: state.orders,
                loadOrders: state.loadOrders,
                errorOrders: state.errorOrders,
                getOrder,
                getOrders
            }}
        >
            {children}
        </orderContext.Provider>
    );
}

export default OrderState;