import React from 'react';
// Link
import { Link } from 'react-router-dom';

const AboutPresentation = () => {

    return (
        <section className="section">
            <div className="section-image_about">
                <div className="back-section-about-presentation">
                    <div className="container">
                        <div className="content">
                            <div className="content-about-presentation">
                                <h4>Descubre más de Kozlo</h4>
                                <p>Visitá nuestro local con todos los protocolos de seguridad para vos.</p>
                                <Link
                                    to={'/about'}
                                    className="btn btn-d"
                                >
                                    Más sobre Nosotros.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div></div>
        </section>
    );
}

export default AboutPresentation;