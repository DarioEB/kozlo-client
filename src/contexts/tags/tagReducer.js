import {
    GET_TAGS,
    GET_TAGS_ERROR,
    GET_TAGS_SUCCESS
} from '../../types';

const tagReducer = (state, action) => {
    switch(action.type) {
        case GET_TAGS:
            return {
                ...state,
                loadTags: true
            }
        case GET_TAGS_SUCCESS:
            return {
                ...state,
                loadTags: false,
                tags: action.payload
            }
        case GET_TAGS_ERROR:
            return {
                ...state,
                loadTags: false,
                errorTags: true
            }
        default:
            return state;
    }
}

export default tagReducer;