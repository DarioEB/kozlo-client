import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
    CREATE_CATEGORY,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR,
    CLEAN_FORM_ADD_CATEGORY
} from '../../types';

const categoriesReducer = (state, action) => {

    switch(action.type) {
        case CREATE_CATEGORY:
            return {
                ...state,
                loadCategory: true
            }
        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loadCategory: false,
                cleanForm: true,
                categories: [...state.categories, action.payload]
            }
        case CREATE_CATEGORY_ERROR:
            return {
                ...state,
                loadCategory: false,
                errorCategory: true
            }
        case CLEAN_FORM_ADD_CATEGORY:
            return {
                ...state,
                cleanForm: null
            }
        case GET_CATEGORIES:
            return {
                ...state,
                loadCategories: true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loadCategories: false,
                errorCategories: null,
                categories: action.payload
            }
        case GET_CATEGORIES_ERROR:
            return {
                ...state,
                loadCategories: false,
                errorCategories: true
            }
        default:
            return state;
    }
}

export default categoriesReducer;