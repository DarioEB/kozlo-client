import {
    GET_ORDER,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_ERROR
} from '../../types';

const orderReducer = (state, action) => {

    switch(action.type) {
        case GET_ORDER:
            return {
                ...state,
                loadOrder: true
            }
        case GET_ORDER_ERROR:
            return {
                ...state,
                loadOrder: false,
                errorOrder: true
            }
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                loadOrder: false,
                errorOrder: null,
                order: action.payload.order
            }
        case GET_ORDERS:
            return {
                ...state,
                loadOrders: true
            }
        case GET_ORDERS_ERROR:
            return {
                ...state,
                loadOrders: false,
                errorOrders: true
            }
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loadOrders: false,
                errorOrders: false,
                orders: action.payload.orders
            }
        default:
            return state;
    }
}

export default orderReducer;