import React, {useReducer} from 'react';
import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
    CREATE_CATEGORY,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_SUCCESS,
    CLEAN_FORM_ADD_CATEGORY
} from '../../types';
import categoriesReducer from './categoriesReducer';
import categoriesContext from './categoriesContext';
// Client axios
import client from '../../config/axios';
import Swal from 'sweetalert2'
const CategoriesState = ({children}) => {

    const initialState = {
        categories: [],
        errorCategories: null,
        loadCategories: null,
        loadCategory: null,
        errorCategory: null,
        cleanForm: null
    }

    const [state, dispatch] = useReducer(categoriesReducer, initialState);

    const addCategory = async f => {
        dispatch({
            type: CREATE_CATEGORY
        });
        try {
            const response = await client.post('/api/categories', f);
            dispatch({
                type: CREATE_CATEGORY_SUCCESS,
                payload: response.data.category
            })
            if(response.status === 200) {
                Swal.fire({
                    title: 'Categoría Registrada.',
                    text: `La categoría ingresada se guardó correctamente`,
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
                            type: CLEAN_FORM_ADD_CATEGORY
                        })  
                    }
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: CREATE_CATEGORY_ERROR
            })
        }
    }

    const getCategories = async () => {
        dispatch({
            type: GET_CATEGORIES
        });

        try {
            const response = await client.get('/api/categories');
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: response.data.categories
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_CATEGORIES_ERROR
            })
        }
    }

    return (
        <categoriesContext.Provider
            value={{
                categories: state.categories,
                loadCategories: state.loadCategories,
                errorProducts: state.errorProducts,
                loadCategory: state.loadCategory,
                errorCategory: state.errorCategory,
                cleanForm: state.cleanForm,
                getCategories,
                addCategory
            }}
        >
            {children}
        </categoriesContext.Provider>
    )
}

export default CategoriesState;