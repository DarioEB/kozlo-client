import React from 'react';
// Link
import { Link } from 'react-router-dom';

const ElegantPresentation = () => {

    return (
        <section className="section ">
            {/* <div className="back-section"> */}
            <div className="container">
                <div className="content">
                    <div className="content-elegant-presentation">

                        <div className="content-elegant-presentation_info">
                            <div className="box-link">
                                <Link
                                    to="/products/elegant"
                                    className="btn btn-d"
                                >
                                    KozloElegant
                                </Link>
                            </div>
                            <div className="info">
                                <h2>Kozlo Elegant</h2>
                                <p>
                                    Para tus ocaciones especiales cuando
                                    necesitas un outfit elegante, en KOZLO
                                    tenemos los mejores trajes en venta y
                                    además en alquiler, diseños únicos,
                                    cortes modernos, skinny, texturas,
                                    elegante sport para que te destaques
                                    con un estilo único.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}

export default ElegantPresentation;