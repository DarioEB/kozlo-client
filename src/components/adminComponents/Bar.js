import React from 'react';
// Link
// import { Link } from 'react-router-dom';
const Bar = ({logout, user}) => {


    return (
        <section className="content-bar-admin">
            <div className="content-bar-admin_info">
                <div className="info-session-admin">
                    <p>
                        Sesión {user.name}  
                    </p>
                </div>
                <div className="button-session-admin">
                    <button
                        className="btn"
                        onClick={() => logout()}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Bar;