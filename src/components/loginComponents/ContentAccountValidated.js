import React from 'react';
import { Link } from 'react-router-dom';
const ContentAccountValidated = ({
    user,
    verify,
    setVerify
}) => {

    if(verify) {
        setVerify();
    }


    return (
        <section className="section section-login_image">
            <div className="back-section">
                <div className="container">
                    <div className="content">
                        <div className="content-verify">
                            <h1 className="title-logo">
                                K<span>ozlo</span>
                            </h1>
                            <div className="content-verify_info">
                                <h4>Verificación exitosa</h4>
                                <p>
                                    {/* <span>{user.name}</span> tu cuenta de e-mail ha sido verificada, ya puede iniciar sesión */}
                                </p>
                            </div>
                            <div className="content-verify_btn">
                                <Link
                                    to={'/login'}
                                    className="link"
                                >Ir a Login</Link>
                                <Link
                                    to={"/"}
                                    className="link"
                                >Ir a la página principal</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentAccountValidated;