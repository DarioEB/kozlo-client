import React from 'react';

const Sidebar = ({changeContent}) => {

    return (
        <aside className="container-sidebar-admin">
            <div className="content-sidebar-admin">
                <div className="content-sidebar-admin_logo">
                    <h1 className="title-logo">K<span>ozlo</span></h1>
                </div>
                <div className="content-sidebar-admin_buttons">
                    <button 
                        className="btn-sidebar"
                        onClick={() => changeContent('products-admin')}
                    >Productos</button>
                    <button 
                        className="btn-sidebar"
                        onClick={() => changeContent('categories-admin')}
                    >Categorías</button>
                    <button 
                        className="btn-sidebar"
                        onClick={() => changeContent('client-admin')}
                    >Clientes</button>
                    <button 
                        className="btn-sidebar"
                        onClick={() => changeContent('users-admin')}
                    >Usuarios</button>
                    <button
                        className="btn-sidebar"
                        onClick={() => changeContent('orders-admin')}
                    >Pedidos</button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;