import React from 'react';

const WhatsappNBrand = ({product}) => {

    return (
        <div className="box-whatsapp">
            <div className="brand">
                <p>{product.brand}</p>
                <i className="fas fa-tag"></i>
            </div>
            <div className="btn-whatsapp">
                <a
                    href={`https://api.whatsapp.com/send?phone=543755344643&text=${`Hola! Quiero consultar el producto ${product.name} de código ${product._id}`}`.replace(' ', '%20')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-product"
                >
                    <i className="fab fa-whatsapp"></i>
                    <span>Consultar Producto</span>
                </a>
            </div>
        </div>
    );
}

export default WhatsappNBrand;