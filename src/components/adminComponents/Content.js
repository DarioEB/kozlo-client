import React from 'react';
import CategoriesAdmin from './CategoriesAdmin';
import OrdersAdmin from './OrdersAdmin';
import ProductsAdmin from './ProductsAdmin';

const Content = ({content}) => {

    return (
        <section className="content-component-render-admin">
            {
                content === 'products-admin' && <ProductsAdmin />
            }
            {
                content === 'categories-admin' && <CategoriesAdmin />
            }
            {
                content === 'orders-admin' && <OrdersAdmin />
            }
        </section>
    );
}

export default Content;