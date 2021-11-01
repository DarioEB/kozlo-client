import React from 'react';
// import { Link } from 'react-router-dom';
const ContentVerify = ({user}) => {

    return (
        <section className="section section-login_image">
            <div className="back-section">
            <div className="container">
                <div className="content">
                    
                    <div className="content-verify">
                        
                <h1 className="title-logo">K<span>ozlo</span></h1>
                        <div className="content-verify_info">
                            <h4>Verificación de cuenta pendiente.</h4>
                            <p>
                                <span>{user.name}</span> hemos enviado un email 
                                a <span>{user.email}</span> para que puedas activar tu cuenta.
                            </p>
                            <p>Activa tu cuenta para iniciar sesión.</p>
                        </div>
                        {/* <div className="content-verify_btn">
                            <Link
                                to={'/login'}
                                className="link"
                            >
                                Ir a Login
                            </Link>
                            <Link
                                to={'/'}
                                className="link"
                            >
                                Ir a la página principal
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div></div>
        </section>
    );
}

export default ContentVerify;