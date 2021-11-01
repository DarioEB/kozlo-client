import React, { useReducer } from 'react';
import {
    CHANGE_CONTENT
} from '../../types';
import adminReducer from './adminReducer';
import adminContext from './adminContext';

const AdminState = ({children}) => {

    const initialState = {
        content: null
    }

    const [state, dispatch] = useReducer(adminReducer, initialState);

    const changeContent = (content) => {
        dispatch({
            type: CHANGE_CONTENT,
            payload: content
        });
    }

    return (
        <adminContext.Provider
            value={{
                content: state.content,
                changeContent
            }}
        >
            {children}
        </adminContext.Provider>
    )
}

export default AdminState;