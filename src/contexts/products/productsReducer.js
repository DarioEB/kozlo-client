import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
    ADD_FILTER_CATEGORY,
    REMOVE_FILTER_CATEGORY,
    FILTER_PRODUCTS,
    GET_PRODUCTS_FILTER_SUCCESS,
    CREATE_PRODUCT,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_ERROR,
    CLEAN_FORM_ADD_PRODUCT,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    ADD_FILTER_PRICE,
    REMOVE_FILTER_PRICE,
    FILTER_SEARCH,
    REMOVE_FILTER_SEARCH,
    GET_FILTER_PRODUCTS,
    GET_FILTER_SEARCH,
    GET_ALL_PRODUCTS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR
} from '../../types';

const productsReducer = (state, action) => {

    switch(action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                loadProduct: true
            }
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loadProduct: false,
                cleanForm: true,
                products: [...state.products, action.payload]
            }
        case CREATE_PRODUCT_ERROR:
            return { 
                ...state,
                loadProduct: false,
                cleanForm: null,
                errorProduct: true
            }
        case GET_PRODUCTS:
            return {
                ...state,
                loadProducts: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loadProducts: false,
                products: action.payload,
                filterProducts: action.payload  
            }
        case GET_PRODUCTS_FILTER_SUCCESS:
            return {
                ...state,
                loadProducts: false,
                products: action.payload,
                filtersProducts: action.payload.filter( product => state.filters.map(filter => filter._id).includes(product.category._id) )
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                loadProducts: false,
                errorProducts: true
            }
        case GET_PRODUCT:
            return {
                ...state,
                loadProduct: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loadProduct: false,
                product: action.payload
            }
        case GET_PRODUCT_ERROR:
            return {
                ...state,
                loadProduct: false,
                errorProduct: true
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                loadProduct: true
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loadProduct:false,
                product: action.payload.product,
                message: action.payload.message,
                products: state.products.filter(product => product._id !== action.payload.product._id)
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loadProduct: false,
                errorProduct: true
            }
        case ADD_FILTER_CATEGORY:
            return {
                ...state,
                filters: [...state.filters, action.payload],
                filterProducts: state.products.filter( product => [...state.filters, action.payload].map( filter => filter._id ).includes(product.category._id) )
            }
        case ADD_FILTER_PRICE:
            return {
                ...state,
                filterProducts: state.products.filter( product => (product.price > action.payload.i && product.price <= action.payload.j))
            }
        case REMOVE_FILTER_PRICE:
            return {
                ...state,
                filterProducts: state.products.filter( product => state.filters.map( filter => filter._id ).includes(product.category._id))
            }
        case REMOVE_FILTER_CATEGORY:
            return {
                ...state,
                filters: state.filters.filter( filter => filter._id !== action.payload._id),
                filterProducts: state.products.filter( product =>  state.filters.filter( filter => filter._id !== action.payload._id).map( filter => filter._id ).includes(product.category._id) )
            }
        case FILTER_PRODUCTS:
            
            return {
                ...state,
                filterProducts: state.products.filter( product => state.filters.map( filter => filter._id ).includes(product.category._id) )
            }
        case CLEAN_FORM_ADD_PRODUCT:
            return {
                ...state,
                cleanForm: null
            }
        case FILTER_SEARCH:
            return {
                ...state,
                filterProducts: state.products.filter( product => product.name.toLowerCase().includes(action.payload) || product.brand.toLowerCase().includes(action.payload))
            }
        case REMOVE_FILTER_SEARCH:
            return {
                ...state,
                filterProducts: state.products
            }
        case GET_FILTER_PRODUCTS:

            return {
                ...state,
                filterProducts: state.products.filter( product => product.category._id === action.payload)
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                filterProducts: state.products
            }
        case GET_FILTER_SEARCH:
            return {
                ...state,
                filterProducts: state.products.filter( product => product.name.toLowerCase().includes(action.payload) || product.brand.toLowerCase().includes(action.payload))
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                loadProduct: true
            }
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loadProduct: false,
                errorProduct: null,
                product: action.payload.product,
                message: action.payload.message
            }
        case UPDATE_PRODUCT_ERROR:
            return {
                ...state,
                loadProduct: false,
                errorProduct: true,
                message: "Error al actualizar el producto"
            }
        default:
            return state
    }
}

export default productsReducer;