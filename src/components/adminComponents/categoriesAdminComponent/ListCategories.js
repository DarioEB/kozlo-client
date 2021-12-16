import React from 'react';
import {
    TitleAdmin,
    ContentElements,
    ContentElement,
    Element,
    ElementDiv,
    ElementImage,
    ElementInformation,
    ElementButtons
} from '../../UI';
const ListCategories = ({categories}) => {

    return (
        <div>
            <TitleAdmin>
                <h2>Listado de Categorías</h2>
                <p>Modifica las categorías de tus productos.</p>
            </TitleAdmin>
            <ContentElements>
                {categories.map( category => (
                    <ContentElement
                        key={category._id}
                    >
                        <Element>
                            <ElementDiv>
                                <ElementImage>
                                    <img 
                                        src={`${process.env.REACT_APP_BACKEND_URL}/api/categories/get-image/${category.image}`}
                                        alt={`Imagen de producto ${category.name}`}
                                    />
                                </ElementImage>
                                <ElementInformation>
                                    <p>Titulo: <span>{category.name}</span></p>
                                    
                                </ElementInformation>
                            </ElementDiv>
                            <ElementInformation
                                className="prices"
                            >
                                {/* <p><span>$ {(product.price).toFixed(2)}</span></p> */}
                                {/* <p><span>Desc: {product.discount}%</span></p> */}
                                {/* <p><span>Total: $ {(product.price - (product.price * (product.discount / 100))).toFixed(2)}</span></p> */}
                                <ElementButtons>
                                    <button
                                        className="btn-details"
                                    >
                                        Detalles
                                    </button>
                                    <button
                                        className="btn-delete"
                                    >
                                        Editar
                                    </button>       
                                </ElementButtons>
                            </ElementInformation>
                        </Element>
                        
                    </ContentElement>
                ))}
            </ContentElements>
        </div>
    );
}

export default ListCategories;