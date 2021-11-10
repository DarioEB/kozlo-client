import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {

    return (
        <Link
            to={`/product/${product._id}`}
        >
            <article className="box-card">

                <div
                    className="box-slide_image list-products"
                >
                    <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                        alt={`Imagen ${product.name}`}
                    />
                </div>
                <div className="box-slide_name list-products">
                    <h4>{product.name}</h4>
                    <p className="brand">{product.brand}<i className="fas fa-tag"></i></p>

                    {
                        product.discount === 0 ? 
                        <div className="prices">
                            <p className="p-discount">${(product.price).toFixed(2)}</p>
                        </div>
                        :
                        <div className="prices">
                            <p className="p-origin">${(product.price).toFixed(2)}</p>
                            <p className="p-discount">${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</p>
                        </div>
                    }
                </div>
            </article>
        </Link>
    );
}

export default Product;