import React from 'react';

const ListCategories = ({categories}) => {

    return (
        <section className="section-list-admin">
            <div className="content-list-categories">
                {categories.map( category => (
                    <article 
                        key={category._id}
                        className="content-category-admin">
                        <div className="content-category-admin_image">
                            <img 
                                src={`${process.env.REACT_APP_BACKEND_URL}/api/categories/get-image/${category.image}`}
                                alt={`Imagen de Producto ${category.name}`}
                            />
                        </div>
                        <div className="content-category-admin_details">
                            <div className="content-category-admin_info">
                                <p>ID: <span>{category._id}</span></p>
                                <p>Nombre: <span>{category.name}</span></p>
                            </div>
                            <div className="content-category-admin_w">
                                <p>Talles existentes</p>
                                <ul>
                                    {category.waists.map( (w, i) => (
                                        <li
                                            key={i}
                                        >
                                            <p>Talle: {w}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="content-category-admin_buttons">
                            {/* <button
                                className="btn btn-delete"
                            >Eliminar</button> */}
                            <button className="btn btn-update">Editar</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>        
    );
}

export default ListCategories;