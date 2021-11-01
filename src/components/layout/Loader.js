import React from 'react';

const Loader = () => {

    return (
        <section className="section section-loader">
            <div className="back-loader">
                <p>Cargando...</p>
                <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
            </div>
        </section>
    );
}

export default Loader;