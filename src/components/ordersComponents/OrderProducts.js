import React from 'react';
import Product from './Product';
const OrderProducts = ({order}) => {

    return (
        <div className="box-content-order_products">
            {order.order_products.map(product => (
                <Product 
                    key={product._id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default OrderProducts;