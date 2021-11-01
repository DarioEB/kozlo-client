import React, { useState } from 'react';
import AlertField from '../alertComponents/AlertField';
import Loader from '../layout/Loader';
function validation(values) {
    let errors = {}

    if(values.name === '') {
        errors.name = 'Este campo es obligatorio';
    }
    if (values.email === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'El email ingresado no es válido';
    }
    if(values.subject === '') {
        errors.subject = 'Este campo es obligatorio';
    } 
    if(values.message.length < 30) {
        errors.message = 'El mensaje debe tener al 30 caracteres';
    }

    return errors;
}

const FormContact = ({
    createContact,
    loadContact
}) => {

    const [errors, setErrors] = useState({})
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChangeContact = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitContact = e => {
        e.preventDefault();

        const getErrors = validation(contact);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;

        if(noErrors) {
            createContact(contact);

            setContact({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    }

    if(loadContact) return <Loader />

    return (
        <div className="content-contact_form">
            <div className="content-contact_form-text">

            </div>
            <form
                onSubmit={handleSubmitContact}
            >
                <div className="field-contact">
                    <label>Nombre (*)</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChangeContact}
                        value={contact.name}
                    />
                    {errors.name ? <AlertField message={errors.name} /> : null}
                </div>
                <div className="field-contact">
                    <label>Email (*)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChangeContact}
                        value={contact.email}
                    />
                    {errors.email ? <AlertField message={errors.email} /> : null}
                </div>
                <div className="field-contact">
                    <label>Asunto (*)</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleChangeContact}
                        value={contact.subject}
                    />
                    {errors.subject ? <AlertField message={errors.subject} /> : null}
                </div>
                <div className="field-contact">
                    <label>Mensaje (*)</label>
                    <textarea
                        name="message"
                        id="message"
                        onChange={handleChangeContact}
                        value={contact.message}
                    ></textarea>
                    
                    {errors.message ? <AlertField message={errors.message} /> : null}
                </div>
                <div className="contact-submit">
                    <button
                        type="submit"
                        className="btn"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormContact;