import React from 'react';

const ContentCart = ({
    cart,
    subtotal,
    shippingcost,
    totalcost
}) => {
    
    return (
        <div className="cart">
            <h4>Productos</h4>
            {cart.products.map(cart => (
                <article
                    key={cart._id}
                    className="product-payment"
                >
                    <div className="product-payment_info">
                    <div className="product-payment_image">
                        <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${cart.images[0]}`}
                            alt={`Imagen product ${cart.name}`}
                        />
                    </div>
                    <div className="product-payment_desc">
                        <p>{cart.name}</p>
                        {cart.waists.map((waist, i) => (
                            <p
                                key={i}
                            >Talle: {waist.waist} Cantidad: {waist.amount}</p>
                        ))}
                    </div>
                    </div>
                    <div className="product-payment-price">
                        <p>${(cart.price - (cart.price * (cart.discount / 100))).toFixed(2)}</p>
                    </div>
                </article>
            ))}
            <div className="cart-costs">
                <div>
                    <p>Subtotal: </p>
                    <span>$ {subtotal.toFixed(2)}</span>
                </div>
                <div>
                    <p>Costo de envío: </p>
                    <span>$ {shippingcost.toFixed(2)}</span>
                </div>
                <div>
                    <p>Total</p>
                    <span>$ {totalcost.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

export default ContentCart;