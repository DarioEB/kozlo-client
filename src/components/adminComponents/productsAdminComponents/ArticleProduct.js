import React from 'react';

const ArticleProduct = ({ product, deleteProduct }) => {

    return (
        <article
            className="content-product-admin"
        >
            <div className="content-product-admin_image">
                <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                    alt={`Imagen de Producto ${product.name}`}
                />
            </div>
            <div className="content-product-admin_details">
                <div className="content-product-admin_info">
                    <p>ID: <span>{product._id}</span></p>
                    <p>Titulo: <span>{product.name}</span></p>
                    <p>Marca: <span>{product.brand}</span></p>
                    <p>Precio: <span>${product.price}</span></p>
                    <p>Descuento: <span>{product.discount}%</span></p>
                </div>
                <div className="content-product-admin_w">
                    <p>Talles</p>
                    <ul>
                        {product.waists.map((w, i) => (
                            <li
                                key={i}
                            >
                                <p>Talle: {w.waist}</p>
                                <p>Stock: {w.stock}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="content-product-admin_buttons">
                <button 
                    className="btn btn-delete"
                    onClick={() => deleteProduct(product._id)}
                >Eliminar</button>
                <button className="btn btn-update">Editar</button>
            </div>
        </article>
    )
}
export default ArticleProduct;