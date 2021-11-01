import React from 'react';
// Link
import { Link } from 'react-router-dom';

const UrbanPresentation = () => {

    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <div className="content-urban-presentation">
                        <div className="content-urban-presentation_info">
                            
                            <div className="info">
                                <h2>Kozlo Urban</h2>
                                <p>
                                    En KOZLO te ayudamos a encontrar tu
                                    estilo propio, siguiendo las tendencias 
                                    urbanas de marcas exclusivas que buscan 
                                    diferenciarse, marcar y expresar tu 
                                    estilo, marcando tendencia y personlidad 
                                    unica - prendas versátiles, de primera 
                                    calidad y durabilidad. De materiales 
                                    agradables al tacto y a la vista, más 
                                    frescos y livianos.
                                </p>
                            </div>
                            <div className="box-link">
                                <Link
                                    to="/products/urban"
                                    className="btn btn-d"
                                >
                                    KozloUrban
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UrbanPresentation;