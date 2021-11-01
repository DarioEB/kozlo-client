import React, { useState } from 'react';
// Link
import { Link } from 'react-router-dom';
import AlertField from '../alertComponents/AlertField';
import Loader from '../layout/Loader';
import AlertLogin from '../alertComponents/AlertLogin';
function validation(values) {
    let errors = {}


    if (values.email === '') {
        errors.email = 'Este campo no puede ir vacío';
    } 
    
    if (values.password === '') {
        errors.password = 'Este campo no puede ir vacío';
    } 

    return errors;
}
const ContentFormLogin = ({
    login, 
    loadUser, 
    errorUser,
    message}) => {

    const [type, setType] = useState(false);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleViewPassword = (e) => {
        e.preventDefault();
        setType(!type);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const getErrors = validation(user);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;
        if (noErrors) {
            login(user);
        }
    }

    if(loadUser) return <Loader />

    return (
        <section className="section section-login_image">
            <div className="back-section">
                <div className="container">
                    <div className="content">
                        <div className="content-login">
                            <h1 className="title-logo">K<span>ozlo</span></h1>
                            {errorUser ? <AlertLogin message={message} /> : null }
                            <form 
                                className="form-login"
                                onSubmit={handleSubmit}
                            >
                                <div className="field-login">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Ej: correo@correo.com"
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
                                            placeholder="Contraseña"
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
                                        value="Ingresar"
                                    />
                                </div>
                            </form>
                            <div className="content-login_forget">
                                <Link
                                    to={"/"}
                                    className="link"
                                >
                                    Olvidé mi contraseña.
                                </Link>
                                <Link
                                    to={'/new-account'}
                                    className="link"
                                >
                                    Registrarme.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentFormLogin;