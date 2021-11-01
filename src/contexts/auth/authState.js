import React, { useReducer } from 'react';
import {
    NEW_ACCOUNT,
    NEW_ACCOUNT_SUCCESS,
    NEW_ACCOUNT_ERROR,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SET_VERIFY,
    AUTHENTICATED_USER,
    LOGOUT,
    ACCOUNT_VALIDATED,
    ACCOUNT_VALIDATED_ERROR,
    ACCOUNT_VALIDATED_SUCCESS
} from '../../types';
import authContext from './authContext';
import authReducer from './authReducer';
import client from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        user: null,
        authenticated: null,
        message: '',
        loadUser: null,
        errorUser: null,
        verify: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Registrar nuevos usuarios
    const newAccount = async data => {
        dispatch({
            type: NEW_ACCOUNT
        });
        try {
            const response = await client.post('/api/users', data);
            dispatch({
                type: NEW_ACCOUNT_SUCCESS,
                payload: response.data
            });
            
        } catch (error) {
            dispatch({
                type: NEW_ACCOUNT_ERROR,
                payload: {
                    message: error.response.data.message
                }
            });
        }
    }

    const login = async data => {
        dispatch({
            type: LOGIN
        });
        try {
            const response = await client.post('/api/auth', data);
            console.log(response.data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    message: error.response.data.message
                }
            });
        }
    }

    const authenticatedUser = async () => {
        const token = localStorage.getItem('token');
        tokenAuth(token);
        try {
            const response = await client.get('/api/auth');
            if(response.data.user) {
                dispatch({
                    type: AUTHENTICATED_USER,
                    payload: response.data.user
                });
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const accountValidation = async (id) => {
        dispatch({
            type: ACCOUNT_VALIDATED
        });
        try {
            const response = await client.get(`/api/users/validation/${id}`);
            dispatch({
                type: ACCOUNT_VALIDATED_SUCCESS,
                payload: response.data.user
            });
        } catch (error){
            console.log(error);
            dispatch({
                type: ACCOUNT_VALIDATED_ERROR
            })
        }
    }

    const setVerify = () => {
        dispatch({
            type: SET_VERIFY
        })
    }

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }
    

    return (
        <authContext.Provider
            value={{
                token: state.token,
                user: state.user,
                authenticated: state.authenticated,
                message: state.message,
                loadUser: state.loadUser,
                errorUser: state.errorUser,
                verify: state.verify,
                newAccount,
                setVerify,
                login,
                authenticatedUser,
                logout,
                accountValidation 
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;