import React from 'react';

const CartProduct = ({
    product,
    handleRemoveProductToCart
}) => {

    return (
        <article
            className="cart-article"
        >
            <div
                className="cart-article_image">
                <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                    alt={`Imagen ${product.name}`}
                />
            </div>
            <div
                className="cart-article_info"
            >
                <p>{product.name}</p>
                {product.waists.map((waist, i) => (
                    <p
                        key={i}
                    >Talle: {waist.waist} Cantidad: {waist.amount}</p>
                ))}
                <p>Precio: ${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</p>
            </div>
            <div className="cart-article_trash">
                <button
                    onClick={() => handleRemoveProductToCart(product)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </article>
    );
}

export default CartProduct;