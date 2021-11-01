import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Componente para renderizar alertas
import AlertField from '../alertComponents/AlertField';
import AlertLogin from '../alertComponents/AlertLogin';
import Loader from '../layout/Loader';
function validation(values) {
    let errors = {}

    if (values.name === '') {
        errors.name = 'El nombre no puede ir vacío';
    }
    if(values.surname === '') {
        errors.surname = 'El apellido no puede ir vacío';
    }
    if (values.email === '') {
        errors.email = 'El E-mail es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email no válido"
    }
    if (values.password === '') {
        errors.password = 'El password no puede ir vacío';
    } else if (values.password.length < 8) {
        errors.password = 'El password required como mínimo 8 caractéres';
    }

    return errors;
}


const ContentFormNewAccount = ({
    newAccount,
    message,
    loadUser,
    errorUser
}) => {

    const [type, setType] = useState(false);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleViewPassword = (e) => {
        e.preventDefault();
        setType(!type);
    }

    const handleFocus = (e) => {
        if (e.target.value.length === 0) {
            setErrors({
                ...errors,
                [e.target.name]: 'Debes completar este campo.'
            })
        } else {
            setErrors({
                ...errors,
                [e.target.name]: null
            })
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        const getErrors = validation(user);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;
        if (noErrors) {
            newAccount(user);
        }
    }

    if (loadUser) return <Loader />;


    return (
        <section className="section section-login_image">
            <div className="back-section">
                <div className="container">
                    <div className="content">
                        <div className="content-login">
                            <h1 className="title-logo">K<span>ozlo</span></h1>
                            {errorUser ? <AlertLogin message={message} /> : null}
                            <form
                                className="form-login"
                                onSubmit={handleSubmit}
                            >
                                <div className="field-login">
                                    <label htmlFor="name">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Tu Nombre"
                                        onBlur={handleFocus}
                                        className={errors.name ? 'error-input' : ''}
                                        onChange={handleChange}
                                        value={user.name}
                                    />
                                    {errors.name ? <AlertField message={errors.name} /> : null}
                                </div>
                                <div className="field-login">
                                    <label htmlFor="surname">Apellido</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        id="surname"
                                        placeholder="Tu Apellido"
                                        onBlur={handleFocus}
                                        className={errors.surname ? 'error-input' : ''}
                                        onChange={handleChange}
                                        value={user.surname}
                                    />
                                    {errors.surname ? <AlertField message={errors.surname} /> : null}
                                </div>
                                <div className="field-login">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Tu Número de Teléfono"
                                        onChange={handleChange}
                                        value={user.phone}
                                    />
                                </div>
                                <div className="field-login">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onBlur={handleFocus}
                                        placeholder="Ej: correo@correo.com"
                                        className={errors.email ? 'error-input' : ''}
                                        onChange={handleChange}
                                        value={user.email}
                                    />
                                    {errors.email ? <AlertField message={errors.email} /> : null}
                                </div>
                                <div className="field-login">
                                    <label htmlFor="password">Contraseña</label>
                                    <div className="input-password">
                                        <input
                                            type={type ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            onBlur={handleFocus}
                                            placeholder="Contraseña"
                                            className={errors.password ? 'error-input' : ''}
                                            onChange={handleChange}
                                            value={user.password}
                                        />

                                        {errors.password ? <AlertField message={errors.password} /> : null}
                                        <span
                                            onClick={(e) => handleViewPassword(e)}
                                            className={`${type ? 'fas fa-eye-slash' : 'fas fa-eye'}`}></span>
                                    </div>
                                </div>
                                <div className="box-submit">
                                    <input
                                        type="submit"
                                        className="btn-submit"
                                        value="Registrarme"
                                    />
                                </div>
                            </form>
                            <div className="content-login_forget">
                                {/* <Link
                                    to={"/"}
                                    className="link"
                                >
                                    Olvidé mi contraseña.
                                </Link> */}
                                <Link
                                    to={'/login'}
                                    className="link"
                                >
                                    Ya tengo una cuenta
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentFormNewAccount;