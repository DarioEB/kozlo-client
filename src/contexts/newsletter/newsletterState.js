import React, { useReducer } from 'react'
import newsletterReducer from './newsletterReducer';
import newsletterContext from './newsletterContext';
import {
    CREATE_NEWSLETTER,
    CREATE_NEWSLETTER_SUCCESS,
    CREATE_NEWSLETTER_ERROR,
    CREATE_CONTACT,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_ERROR
} from '../../types';
import client from '../../config/axios';
import Swal from 'sweetalert2';
const NewsletterState = ({children}) => {

    const initialState = {
        loadNewsletter: null,
        errorNewsletter: null,
        message: '',
        loadContact: null,
        errorContact: null
    }

    const [state, dispatch] = useReducer(newsletterReducer, initialState);

    const createNewsletter = async (data) => {
        dispatch({
            type: CREATE_NEWSLETTER
        })
        try {
            const response = await client.post('/api/newsletter', data);
            dispatch({
                type: CREATE_NEWSLETTER_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: CREATE_NEWSLETTER_ERROR,
                payload: error.response.data
            })
            
        }
    } 


    const createContact = async data => {
        dispatch({
            type: CREATE_CONTACT
        });
        try {
            const response = await client.post('/api/contact', data);
            console.log(response);
            dispatch({
                type: CREATE_CONTACT_SUCCESS,
                payload: response.data
            });
            if(response.status === 200) {
                Swal.fire({
                    title: 'Mensaje enviado correctamente.',
                    text: `El mensaje se envió correctamente`,
                    icon: 'success',
                    background: '#000000',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ok!',
                    customClass: {
                        popup: 's-container-contact',
                        title: 's-title-contact',
                        htmlContainer: 's-text-contact',
                        confirmButton: 's-btn-contact',
                    }
                }).then( value => {
                    if(value.isConfirmed === true) {
                        
                    }
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: CREATE_CONTACT_ERROR
            })
        } 

    }

    return (
        <newsletterContext.Provider
            value={{
                loadNewsletter: state.loadNewsletter,
                errorNewsletter: state.errorNewsletter,
                message: state.message,
                loadContact: state.loadContact,
                errorContact: state.errorContact,
                createNewsletter,
                createContact
            }}
        >
            {children}
        </newsletterContext.Provider>
    )
}

export default NewsletterState;