import {
    CREATE_NEWSLETTER,
    CREATE_NEWSLETTER_SUCCESS,
    CREATE_NEWSLETTER_ERROR,
    CREATE_CONTACT,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_ERROR
} from '../../types';
const newsletterReducer = (state, action) => {

    switch(action.payload) {
        case CREATE_NEWSLETTER:
            return {
                ...state,
                loadNewsletter: true
            }
        case CREATE_NEWSLETTER_SUCCESS:
            return {
                ...state,
                loadNewsletter: false,
                errorNewsletter: null,
                message: action.payload.message
            }
        case CREATE_NEWSLETTER_ERROR:
            return {
                ...state,
                loadNewsletter: false,
                errorNewsletter: true,
                message: action.payload.message
            }
        case CREATE_CONTACT:
            return {
                ...state,
                loadContact: true
            }
        case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                loadContact: false,
                errorContact: false
            }
        case CREATE_CONTACT_ERROR:
            return {
                ...state,
                loadContact: false,
                errorContact: true
            }
        default:
            return state;
    }
}

export default newsletterReducer;