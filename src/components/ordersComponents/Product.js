import React from 'react';

const Product = ({product}) => {

    return (
        <article
                    className="order-product"
                >
                    <div className="order-product_image">
                        <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                            alt={`imagen de producto ${product.name}`}
                        />
                    </div>
                    <div className="order-product_info">
                        <div className="order-product_name">
                            <p>{product.name}</p>
                            <p className="_brand">{product.brand} <i className="fas fa-tag"></i></p>
                        </div>
                        <div className="order-product_waists">
                            <p>Precio: <span>${product.price}</span></p>
                            {product.waists.map((w, i) => (
                                <div
                                    key={w}
                                    className="order-product_waists_waist"
                                >
                                    <p>Talle: {w.waist}</p>
                                    <p>Cantidad: {w.amount}</p>
                                </div>
                            ))}
                        </div>
                        <div className="order-product_total">
                            <p>Total: ${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</p>
                        </div>
                    </div>
                </article>
    );
}

export default Product;