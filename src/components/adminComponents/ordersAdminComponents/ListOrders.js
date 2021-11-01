import React from 'react';
import Order from './Order';

const ListOrders = ({
    orders
}) => {


    return (
        <div className="section-list-admin _orders">
            <div className="content-list-orders">
                {orders.map( order => (
                    <Order 
                        key={order._id}
                        order={order}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListOrders;