import React from 'react';

const OrderDetails = ({ order }) => {

    const created = new Date(order.created);

    return (
        <div className="content-order_details">
            <p>Detalles</p>
            <div className="box-content-order_details">
                <p>Fecha: <span>{created.getDate()}-{created.getMonth() + 1}-{created.getFullYear()}</span></p>
                <p>Pago: <span>{order.status}</span></p>
                <p>Medio de pago: <span>Mercado Pago</span></p>
                <p>Envío: <span>{order.status}</span></p>
                <div className="box-content-order_details_address">
                    <p className="_subtitle">Dirección de Envío:</p>
                    <p>{order.client_name} {order.client_lastname}</p>
                    <p>{order.client_street} {order.client_street_number}{order.client_departament ? `, Dto ${order.client_departament}` : '' }</p>
                    {order.client_suburb !== '' ? <p>Barrio: {order.client_suburb}</p> : null}
                    <p>{order.client_city}, {order.client_zip}</p>
                    <p>{order.client_province}, {order.client_country}</p>
                    <p>{order.client_phone}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;