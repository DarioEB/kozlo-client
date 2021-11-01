import React,{useContext, useState } from 'react';
// Link
import { Link } from 'react-router-dom';
// Contexts
import newsletterContext from '../../contexts/newsletter/newsletterContext';
import AlertField from '../alertComponents/AlertField';
import AlertLogin from '../alertComponents/AlertLogin';
function validation(values) {
    let errors = {}

    if (values.email === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'El email ingresado no es válido';
    }

    return errors;
}

const Footer = () => {

    const NewsletterContext = useContext(newsletterContext);
    const { createNewsletter, message } = NewsletterContext;
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        email: ''
    });
    const handleSubmitNewsletter = (e) => {
        e.preventDefault();

        const getErrors = validation(data);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;
        if(noErrors) {
            createNewsletter(data);
            setData({email: ''})
        }

    }

    return (
        <footer className="section section-footer">
            <div className="back-section">
                <div className="container">
                    <div className="content">
                    
                        <div className="content-footer">
                            <div className="content-footer_link">
                                <Link
                                    to={'/contact'}
                                    className="link"
                                >Contacto</Link>
                                <Link
                                    to={'/help'}
                                    className="link"
                                >Preguntas Frecuentes</Link>
                                <Link
                                    to={'/contact'}
                                    className="link"
                                >Asoramiento de Imagen</Link>
                                <Link
                                    to={'/about'}
                                    className="link"
                                >Nosotros</Link>
                            </div>
                            <div className="content-newsletter">
                                {message ? <AlertLogin message={message} /> : null }
                                <h4>Suscribite a nuestro Newsletter</h4>
                                <p>
                                    Suscribite y recibí notificaciones sobre ofertas,
                                    liquidaciones, tips sobre asesoramiento de imagen
                                    y muchos más.
                                </p>
                                <form 
                                    onSubmit={handleSubmitNewsletter}
                                    className="form-newsletter">
                                    <div className="field-newsletter">
                                        <label htmlFor="email">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Ej: correo@correo.com"
                                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                                            value={data.email}
                                        />
                                        {errors.email ? <AlertField message={errors.email} /> : null }
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn-submit"
                                        value="Suscribirme"
                                    />
                                </form>
                            </div>

                            <div className="content-footer_social">
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><i className="fab fa-instagram"></i></a>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><i className="fab fa-facebook-f"></i></a>
                            </div>
                            <div className="content-footer_copy">
                                <p>
                                    &copy; {new Date().getFullYear()} Kozlo -
                                    HEKSA LOSINGER S.R.L. - <Link
                                        className="link"
                                        to={'/privacy-policies'}
                                    >Políticas de privacidad</Link> | <Link
                                        className="link"
                                        to={'/terms-conditions'}
                                    > Terminos y condiciones</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;