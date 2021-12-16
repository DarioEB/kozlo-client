import React, { useReducer} from 'react';
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
import productsReducer from './productsReducer';
import productsContext from './productsContext';
import Swal from 'sweetalert2'
// Cliente axios
import client from '../../config/axios';
const ProductsState = ({children}) => {

    const initialState = {
        products: [],
        loadProducts: null,
        errorProducts: null,
        product: null,
        loadProduct: null,
        errorProduct: null,
        filters: [],
        filterProducts: [],
        cleanForm: null
    }
    const [state, dispatch] = useReducer(productsReducer, initialState);

    const addProduct = async (f) => {
        dispatch({
            type: CREATE_PRODUCT
        });
        try {   
            const response = await client.post('/api/products', f);
            dispatch({
                type: CREATE_PRODUCT_SUCCESS,
                payload: response.data.product
            })
            if(response.status === 200) {
                Swal.fire({
                    title: 'Producto Registrado.',
                    text: `El producto ingresado se ha guardado correctamente`,
                    icon: 'success',
                    background: '#FFFFFF',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ok!',
                    customClass: {
                        popup: 's-container-product',
                        title: 's-title-product',
                        htmlContainer: 's-text-product',
                        confirmButton: 's-btn-product',
                    }
                }).then( value => {
                    if(value.isConfirmed === true) {
                        dispatch({
                            type: CLEAN_FORM_ADD_PRODUCT
                        });
                    }
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: CREATE_PRODUCT_ERROR
            })
        }

    }

    const deleteProduct = async id => {
        dispatch({
            type: DELETE_PRODUCT
        });
        try {
            const response = await client.delete(`/api/products/${id}`);
            dispatch({
                type: DELETE_PRODUCT_SUCCESS,
                payload: response.data
            });
            if(response.status === 200) {
                Swal.fire({
                    title: 'Producto Eliminado.',
                    text: `El producto se eliminó correctamente`,
                    icon: 'success',
                    background: '#FFFFFF',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ok!',
                    customClass: {
                        popup: 's-container-product',
                        title: 's-title-product',
                        htmlContainer: 's-text-product',
                        confirmButton: 's-btn-product',
                    }
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: DELETE_PRODUCT_ERROR
            })
        }
    }

    const getProducts = async () => {
        dispatch({
            type: GET_PRODUCTS 
        });
        try {
            const response = await client.get('/api/products');
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: response.data.products
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_PRODUCTS_ERROR
            })
        }
    }

    const getProductsFilter = async () => {
        dispatch({
            type: GET_PRODUCTS 
        });
        try {
            const response = await client.get('/api/products');
            dispatch({
                type: GET_PRODUCTS_FILTER_SUCCESS,
                payload: response.data.products
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_PRODUCTS_ERROR
            })
        }
    }

    const getProduct = async (id) => {
        dispatch({
            type: GET_PRODUCT
        });
        try {
            const response = await client.get(`/api/products/${id}`);
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: response.data.product
            })
        } catch (error) {
            dispatch({
                type: GET_PRODUCT_ERROR
            })
        }
    }

    const addFilterCategory = (category) => {
        dispatch({
            type: ADD_FILTER_CATEGORY,
            payload: category
        });
    }   
    
    const removeFilterCategory = (category) => {
        dispatch({
            type: REMOVE_FILTER_CATEGORY,
            payload: category
        });
    }

    const filtered = () => {
        dispatch({
            type: FILTER_PRODUCTS
        });
    }

    const addFilterPrice = (value) => {
        let i;
        let j;
        if(value === "0") {
            dispatch({
                type: REMOVE_FILTER_PRICE
            })
        } else if(value === "1") {
            i = 0;
            j = 5000;
            dispatch({
                type: ADD_FILTER_PRICE,
                payload: {
                    i,
                    j
                }
            })
        } else if(value === "2") {
            i = 5000;
            j = 10000;
            dispatch({
                type: ADD_FILTER_PRICE,
                payload: {
                    i,
                    j
                }
            })
        } else if(value === "3") {
            i = 10000;
            j = 15000;
            dispatch({
                type: ADD_FILTER_PRICE,
                payload: {
                    i,
                    j
                }
            })
        } else if(value === "4") {
            i = 15000;
            j = 100000;
            dispatch({
                type: ADD_FILTER_PRICE,
                payload: {
                    i,
                    j
                }
            })
        } 
    }

    const filterSearch = async (search) => {
        dispatch({
            type: FILTER_SEARCH,
            payload: search.toLowerCase()
        })
    }

    const removeFilterSearch = () => {
        dispatch({
            type: REMOVE_FILTER_SEARCH
        })
    }

    const getFilterProducts = (category) => {
        dispatch({
            type: GET_FILTER_PRODUCTS,
            payload: category 
        })
    }
    
    const getAllProducts = () => {
        dispatch({
            type: GET_ALL_PRODUCTS
        })
    }

    const handleFilterSearch = e => {
        dispatch({
            type: GET_FILTER_SEARCH,
            payload: e.target.value
        })
    }

    const updateProduct = async (product) => {
        dispatch({
            type: UPDATE_PRODUCT
        })
        try {
            const response = await client.put(`/api/products/${product._id}`);
            dispatch({
                type: UPDATE_PRODUCT_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            console.log(err);
            dispatch({
                type: UPDATE_PRODUCT_ERROR
            })
        }
    }

    return (
        <productsContext.Provider
            value={{
                products: state.products,
                loadProducts: state.loadProducts,
                errorProducts: state.errorProducts,
                product: state.product,
                loadProduct: state.loadProduct,
                errorProduct: state.errorProduct,
                filters: state.filters,
                filterProducts: state.filterProducts,
                cleanForm: state.cleanForm,
                getProducts,
                getProduct,
                addFilterCategory,
                removeFilterCategory,
                filtered,
                getProductsFilter,
                addProduct,
                deleteProduct,
                addFilterPrice,
                filterSearch,
                removeFilterSearch,
                getFilterProducts,
                handleFilterSearch,
                getAllProducts,
                updateProduct
            }}
        >
            {children}
        </productsContext.Provider>
    );
}

export default ProductsState;