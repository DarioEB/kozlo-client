import React, { useReducer } from 'react';
import {
    GET_TAGS,
    GET_TAGS_ERROR,
    GET_TAGS_SUCCESS
} from '../../types';
import tagReducer from './tagReducer';
import tagContext from './tagContext';
import client from '../../config/axios';
const TagState = ({children}) => {

    const initialState = {
        tags: [],
        loadTags: null,
        errorTags: null
    }

    const [state, dispatch] = useReducer(tagReducer, initialState);

    const getTags = async () => {
        dispatch({
            type: GET_TAGS
        });
        try {
            const response = await client.get('/api/tags');
            dispatch({
                type: GET_TAGS_SUCCESS,
                payload: response.data.tags
            })
        } catch (error) {
            dispatch({
                type: GET_TAGS_ERROR
            })
        }
    }

    return (
        <tagContext.Provider
            value={{
                tags: state.tags,
                loadTags: state.tags,
                errorTags: state.errorTags,
                getTags
            }}
        >
            {children}
        </tagContext.Provider>
    )
}

export default TagState;