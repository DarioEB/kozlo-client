import React from 'react';

const CartViewCosts = ({
    subtotal,
    shippingcost
}) => {

    return (
        <div className="content-cart_cost">
            <div>
                <p>Subtotal: </p>
                <p className="cost">
                    ${subtotal.toFixed(2)}
                </p>
            </div>
            {
                shippingcost !== 0 ?
                    <div>
                        <p>Costo de envío</p>
                        <p className="cost">
                            ${shippingcost.toFixed(2)}
                        </p>
                    </div>
                    : null
            }
        </div>
    );
}

export default CartViewCosts;