import React from 'react';
import ArticleProduct from './ArticleProduct';

const ListProducts = ({products, deleteProduct}) => {

    return (
        <section className="section-list-admin">
            <div className="content-list-products">
                {products.map( product => (
                    <ArticleProduct 
                        key={product._id}
                        product={product}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </div>
        </section>
    );
}

export default ListProducts;