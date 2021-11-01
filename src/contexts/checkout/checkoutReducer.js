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

const checkoutReducer = (state, action) => {
    switch(action.type) {
        case HANDLE_CHANGE_DATA:
            return {
                ...state,
                clientdata: {...state.clientdata, [action.payload.name]: action.payload.value}
            }
        case SET_SHIPPING_COST:
            return {
                ...state,
                shippingcost: (Number(action.payload.cost)),
                totalcost: (Number(action.payload.cost) + state.subtotal),
                clientdata: { ...state.clientdata, zip: action.payload.zip}
            }
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                loadCart: true
            }
        case ADD_PRODUCT_TO_CART_SUCCESS:
            return {
                ...state,
                loadCart: false,
                cart: action.payload.cart,
                subtotal: action.payload.cart.subtotal,
                totalcost: action.payload.cart.subtotal + state.shippingcost
            }
        case ADD_PRODUCT_TO_CART_ERROR:
            return {
                ...state,
                loadCart: false,
                errorCart: true
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: {...state.cart, products: [...state.cart.products, action.payload]},
                subtotal: (state.subtotal + ((action.payload.price - (action.payload.price * (action.payload.discount / 100))) * (action.payload.waists.map(w => w.amount)).reduce((a, b) => a + b, 0))),
                totalcost: (state.shippingcost + state.subtotal + ((action.payload.price - (action.payload.price * (action.payload.discount / 100))) * (action.payload.waists.map(w => w.amount)).reduce((a, b) => a + b, 0)))
            }
        case GET_CART:
            return {
                ...state,
                loadCart: true
            }
        case GET_CART_ERROR:
            return {
                ...state,
                loadCart: false,
                errorCart: true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                loadCart: false,
                cart: action.payload,
                subtotal: action.payload.subtotal,
                totalcost: (state.shippingcost + action.payload.subtotal)
            }
        case CLEAN_CHECKOUT:
            return {
                ...state,
                loadCart: null,
                cart: {
                    products: [],
                    subtotal: 0
                },
                subtotal: 0,
                totalcost: 0,
                shippingcost: 0,
                errorCart: null
            }
        case CLEAN_CHECKOUT_SUCCESS:
            return {
                ...state,
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
                cart: { products: []},
                subtotal: 0,
                shippingcost: 0
            }
        case SET_CHECKOUT_DATA:
            return {
                ...state,
                checkout: action.payload.payment,
                token: action.payload.token,
                card: action.payload.card
            }
        
        case REMOVE_PRODUCT_TO_CART:
            return {
                ...state,
                loadCart: true
            }
        case REMOVE_PRODUCT_TO_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
                subtotal: action.payload.subtotal,
                loadCart: false,
                totalcost: action.payload.subtotal + state.shippingcost
            }
        case REMOVE_TO_CART:
            return {
                ...state,
                cart: { ...state.cart, products: state.cart.products.filter( product => product._id !== action.payload._id )},
                subtotal: state.subtotal - ((action.payload.price - (action.payload.price * (action.payload.discount / 100))) * (action.payload.waists.map(w => w.amount)).reduce((a, b) => a + b, 0)),
                totalcost: (state.shippingcost + (state.subtotal - ((action.payload.price - (action.payload.price * (action.payload.discount / 100))) * (action.payload.waists.map(w => w.amount)).reduce((a, b) => a + b, 0))))
            }
        case CHECKOUT:
            return {
                ...state,
                loadShop: true
            }
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                shop: action.payload.shop,
                loadShop: false
            }
        case CHECKOUT_ERROR:
            return {
                ...state,
                loadShop: false,
                errorShop: true
            }
        default:
            return state;
    }
}

export default checkoutReducer;