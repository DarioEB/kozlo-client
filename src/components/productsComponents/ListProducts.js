import React from 'react';
// ProductComponent
import Product from './Product';
const ListProducts = ({products,  filters}) => {

    if(products.filter( product => filters.map( filter => filter._id).includes(product.category._id)).length === 0 && filters.length > 0) return (
        <section
            className="section section-not-products"
        >
            <div className="container">
                <div className="not-products">
                    <h4>No se encontraron productos de la categoría seleccionada</h4>
                </div>
            </div>
        </section>
    );
    

    return(
        <section className="section">
            <div className="container">
                <div className="content-products">
                    {products.map( product => (
                        <Product 
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListProducts;