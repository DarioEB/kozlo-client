import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    TitleAdmin,
    ContentElements,
    ContentElement,
    Element,
    ElementDiv,
    ElementImage,
    ElementInformation,
    ElementButtons,
    Filters
} from '../../UI';
const ListProducts = ({
    deleteProduct,
    categories,
    filterProducts,
    getFilterProducts,
    handleFilterSearch,
    getAllProducts
}) => {

    const handleChangeCategory = e => {
        if(e.target.value === '') {
            getAllProducts();
        } else {
            getFilterProducts(e.target.value);
        }
    }

    

    return (
        <div>
            <TitleAdmin>
                <h2>Listado de productos</h2>
                <p>Buscá, filtra y modifica todos los productos que tenés en stock.</p>
            </TitleAdmin>
            <Filters>
                <select
                    className="select"
                    id="categories"
                    name="categories"
                    onChange={handleChangeCategory}
                >
                    <option value="">Todas</option>
                    {categories.map( category => (
                        <option
                            key={category._id}
                            value={category._id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                >
                    <span>Más vistos</span>
                </button>
                <button
                    type="button"
                >
                    <span>Whatsapp Botón</span>
                    <i className="fab fa-whatsapp"></i>
                </button>
                <input 
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Busca por nombre o marca"
                    onChange={handleFilterSearch}                  
                />
            </Filters>
            <ContentElements>
                {filterProducts.map( product => (
                    <ContentElement
                        key={product._id}
                    >
                        <Element>
                            <ElementDiv>
                                <ElementImage>
                                    <img 
                                        src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${product.images[0]}`}
                                        alt={`Imagen de producto ${product.name}`}
                                    />
                                </ElementImage>
                                <ElementInformation>
                                    <p>Titulo: <span>{product.name}</span></p>
                                    <p>Marca: <span>{product.brand}</span></p>
                                    <p>Categoría: <span>{product.category.name}</span></p>
                                    <p></p>
                                </ElementInformation>
                            </ElementDiv>
                            <ElementInformation
                                className="prices"
                            >
                                <p><span>$ {(product.price).toFixed(2)}</span></p>
                                <p><span>Desc: {product.discount}%</span></p>
                                <p><span>Total: $ {(product.price - (product.price * (product.discount / 100))).toFixed(2)}</span></p>
                            </ElementInformation>
                        </Element>
                        <ElementButtons>
                            <button
                                className="btn-details"
                            >
                                Detalles
                            </button>
                            <Link
                                to={`/admin/products/edit/${product._id}`}
                                className="btn-delete"
                            >
                                Editar
                            </Link>
                        </ElementButtons>
                    </ContentElement>
                ))}
            </ContentElements>
        </div>
    );
}

export default ListProducts;