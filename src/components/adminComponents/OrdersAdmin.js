import React, { useState, Fragment, useEffect, useContext } from 'react';

// Contexts
import orderContext from '../../contexts/orders/orderContext'
import ListOrders from './ordersAdminComponents/ListOrders';

const OrdersAdmin = () => {

    const [component, setComponent] = useState(null);

    const OrderContext = useContext(orderContext);
    const {getOrders, orders} = OrderContext;

    useEffect(() => {
        getOrders();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <div className="content-component_buttons">
                <button
                    className="btn"
                    onClick={() => setComponent('list-orders')}
                >Ver pedidos</button>
                <button
                    className="btn"
                >Buscar pedido</button>
            </div>
            {
                !component ? 
                <div className="content-component_preview">
                    {orders.length === 0 ? <p>Todavía no hay usuarios cargados</p> : <p>Selecciona una acción</p>}
                </div> : null
            }
            
            <div className="content-component_actions">
                {
                    component === 'list-orders' ?
                    <ListOrders 
                        orders={orders}
                    /> : null
                }
            </div>
        </Fragment>
    );
}

export default OrdersAdmin;