import {
    CHANGE_CONTENT
} from '../../types';

const adminReducer = (state, action) => {

    switch(action.type) {
        case CHANGE_CONTENT:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state;
    }
}

export default adminReducer;