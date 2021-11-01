import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {

    return (
        <Link
            to={`/product/${product._id}`}
        >
            <article className="box-card">

                <div
                    className="box-slide_image"
                >
                    <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                        alt={`Imagen ${product.name}`}
                    />
                </div>
                <div className="box-slide_name">
                    <h4>{product.name}</h4>
                    <p className="brand">{product.brand}<i className="fas fa-tag"></i></p>
                    <div className="prices">
                        <p className="p-origin">${product.price}</p>
                        <p className="p-discount">${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default Product;