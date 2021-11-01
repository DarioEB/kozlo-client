import React from 'react';
import {Link} from 'react-router-dom';
const Presentation = () => {

    return (
        <section className="section section-home_image">
            <div className="back-section">
                <div className="container">
                    <div className="content">
                        <div className="content-presentation">
                            <h1>K<span>ozlo</span>.</h1>
                            <p>
                                Indumentaria para hombres con personalidad, que 
                                buscan diferenciarse y marcar su estilo.
                                Es ahora el momento de prepararte y estar 
                                listo... Es ahora el momento de ver el futuro
                                y descubrir las colecciones que cambiarán las forma de expresar tu estilo.
                            </p>
                            <Link
                                to="/"
                                className="btn btn-d"
                            >Exclusivo Kozlo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentation;