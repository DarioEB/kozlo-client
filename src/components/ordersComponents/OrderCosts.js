import React from 'react';

const OrderCosts = ({order}) => {

    return (
        <div className="content-cost-shop">
            <div>
                <p>Subtotal</p>
                <p className="_cost">${order.subtotal.toFixed(2)}</p>
            </div>
            <div>
                <p>Costo de Envio</p>
                <p className="_cost">${order.shipping_cost.toFixed(2)}</p>
            </div>
            <div>
                <p className="_totalcost">Total</p>
                <p className="_cost">${order.total_cost.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default OrderCosts;