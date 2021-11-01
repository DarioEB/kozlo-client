import React from 'react';
import OrderCosts from './OrderCosts';
import OrderDetails from './OrderDetails';
import OrderProducts from './OrderProducts';

const ContentOrder = ({order}) => {

    return (
        <section className="section section-order">
            <div className="container">
                <div className="content">
                    <div className="content-order">
                        <h4>Orden #{order._id}</h4>
                        <div className="content-order_layout">
                            <OrderDetails 
                                order={order}
                            />
                            <div className="content-order_products">
                                <p>Productos</p>
                                <OrderProducts 
                                    order={order}
                                />
                                <OrderCosts 
                                    order={order}
                                />
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentOrder;