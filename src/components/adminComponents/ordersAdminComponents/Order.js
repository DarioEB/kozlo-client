import React from 'react';

const Order = ({
    order
}) => {

    const created = new Date(order.created);

    return (
        <div className="content-order-admin">
            <div className="order-info-admin">
                <div className="order-info-admin-details">
                    <h4>Detalles</h4>
                    <div className="">
                        <div>
                            <p>Fecha</p>
                            <span>{`${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`}</span>
                        </div>
                        <div>
                            <p>Estado</p>
                            <span>{order.status}</span>
                        </div>
                        <div>
                            <p>Detalles de transacción</p>
                            <span>{order.status_transaction}</span>
                        </div>
                        <div>
                            <p>Monto de transacción</p>
                            <span>${order.amount_transaction}</span>
                        </div>
                    </div>
                </div>
                <div className="order-info-admin-address">
                    <h4>Datos de envío</h4>
                    <div className="">
                        <div>
                            <p>Nombre:</p>
                            <span>{order.client_name}, {order.client_lastname}</span>
                        </div>
                        <div>
                            <p>
                                Dirección:
                            </p>
                            <span>
                                {order.client_street} {order.client_street_number}
                                {order.client_departament ? ` ${order.client_departament}` : null}
                            </span>
                        </div>
                        <div>
                            {order.client_suburb ? 
                            <>
                                <p>
                                    Barrio:
                                </p>
                                <span>
                                    {order.client_suburb}
                                </span>
                            </> : null}
                        </div>
                        <div>
                            <p>
                                Localidad:
                            </p>
                            <span>
                                {order.client_city}, {order.client_zip} - {order.client_province}, {order.client_country}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="order-admin-change-status">
                    <div className="order-admin-change-status_button">
                        <button
                            className="btn"
                        >Cambiar el estado de la orden</button>
                    </div>
                    <div className="order-admin-change-select_button">
                        <select
                            id="status"
                            name="status"
                            defaultValue=""
                        >
                            <option>--- Selecciona ---</option>
                            <option>Empaquetado</option>
                            <option>Enviado</option>
                        </select>
                        <button
                            className="btn"
                        >
                            Guarda cambio
                        </button>
                    </div>  
                </div>
            </div>

            <div className="box-order-products-admin">
                <div className="order-products-admin">
                    {order.order_products.map( product => (
                        <article
                            key={product._id}
                            className="content-order-product-admin"
                        >
                            <div className="content-order-product-admin-info">
                                <div className="content-order-product-admin-info-image">
                                    <img 
                                        src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                                        alt={`Producto ${product.name}`}
                                    />
                                </div>
                                <div className="content-order-product-admin-info-product">
                                    <p>Código: {product._id}</p>
                                    <p>Nombre: {product.name}</p>
                                    <p>Marca: {product.brand} <i className="fas fa-tag"></i></p>
                                    <div className="_waists">
                                        {product.waists.map( (w, i) => (
                                            <p
                                                key={i}
                                            >Talle {w.waist} x {w.amount}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="content-order-product-admin-prices">
                                <p>
                                    Precio de producto ${product.price}
                                </p>
                                <p>
                                    Descuento del {product.discount}%
                                </p>
                                <p>
                                    Precio total del producto ${(product.price - ((product.price * (product.discount / 100)))).toFixed(2)}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="order-product-admin-costs">
                    <div>
                        <p>Subtotal</p>
                        <span>${order.subtotal}</span>
                    </div>
                    <div>
                        <p>Costo de envío</p>
                        <span>${order.shipping_cost}</span>
                    </div>
                    <div>
                        <p>Total</p>
                        <span>{order.total_cost}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;