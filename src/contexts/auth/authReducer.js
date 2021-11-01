import {
    NEW_ACCOUNT,
    NEW_ACCOUNT_SUCCESS,
    NEW_ACCOUNT_ERROR,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    AUTHENTICATED_USER,
    SET_VERIFY,
    LOGOUT,
    ACCOUNT_VALIDATED,
    ACCOUNT_VALIDATED_ERROR,
    ACCOUNT_VALIDATED_SUCCESS
} from '../../types';

const authReducer = (state, action) => {
    switch(action.type) {
        case NEW_ACCOUNT:
            return {
                ...state,
                loadUser: true
            }
        case NEW_ACCOUNT_SUCCESS:
            return {
                ...state,
                loadUser: false,
                user: action.payload.user,
                message: action.payload.message,
                verify: true
            }
        case NEW_ACCOUNT_ERROR:
            return {
                ...state,
                loadUser: false,
                errorUser: true,
                message: action.payload.message
            }
        case LOGIN:
            return {
                ...state,
                loadUser: true,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                authenticated: true,
                loadUser: false,
                message: "",
                error: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                message: action.payload.message,
                loadUser: false,
                errorUser: true,
            }
        case AUTHENTICATED_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true,
                error:null
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null
            }
        case SET_VERIFY:
            return {
                ...state,
                verify: null,
                errorUser: null,
                loadUser: null
            }
        case ACCOUNT_VALIDATED:
            return {
                ...state,
                loadUser: true
            }
        case ACCOUNT_VALIDATED_ERROR:
            return {
                ...state,
                loadUser: false,
                errorUser: true
            }
        case ACCOUNT_VALIDATED_SUCCESS:
            return {
                ...state,
                loadUser: false,
                errorUser: null,
                user: action.payload,
                verify: true
            }
        default:
            return state;
    }
}

export default authReducer;