import React from 'react';

const InformationContact = () => {


    return (
        <div className="content-contact_info">
            <div className="address-info">
                <h4>Dirección y Horarios de Atención</h4>
                <div>
                    <i className="fas fa-map-marked-alt"></i>
                    <p> Av. Sarmiento 1100. Oberá, Misiones. CP: 3360</p>
                </div>
                
                <div>
                    <i className="fas fa-phone"></i> 
                    <p>Teléfono: 3755 34-4643</p>
                </div>
                <div>
                    <i className="fas fa-store"></i>
                    <p> Lunes a Viernes: 8:30hs a 12:30hs & 16hs a 20hs</p>
                </div>
                <div>
                    <i className="fas fa-store"></i>
                    <p> Sábado de 8:30hs a 12:30hs & 16:30hs a 20:30hs</p>
                </div>
            </div>
            <div className="email-info">
                <h4>Consultas</h4>
                <p>Correo electrónico: <span>info@kozlohombres.com</span></p>
                <p>Gmail: <span>hombreskozlo@gmail.com</span></p>
            </div>
            <div className="social-media-info">
                <h4>Redes sociales</h4>
                <div className="links">
                    <a
                        href="https://www.instagram.com/kozlo.hombre/"
                        target="_blank"
                        rel="nooperner noreferrer"
                        title="Instagram Kozlo"
                    ><i className="fab fa-instagram"></i></a>
                    <a
                        href="https://www.facebook.com/kozlo.hombres/"
                        target="_blank"
                        rel="nooperner noreferrer"
                        title="Facebook Kozlo"
                    ><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
    );
}

export default InformationContact;