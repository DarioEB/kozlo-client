import React, { Fragment, useState, useContext, useEffect } from 'react';
import AddProduct from './productsAdminComponents/AddProduct';
import ListProducts from './productsAdminComponents/ListProducts';
// Contexts
import productsContext from '../../contexts/products/productsContext';
import categoriesContext from '../../contexts/categories/categoriesContext';
import tagsContext from '../../contexts/tags/tagContext';
// Layout Components
const ProductsAdmin = () => {

    const [component, setComponent] = useState(null);
    // ProductsContext
    const ProductsContext = useContext(productsContext);
    const {getProducts, products, addProduct, cleanForm, deleteProduct } = ProductsContext;
    // CategoriesContext
    const CategoriesContext = useContext(categoriesContext);
    const { getCategories, categories  } = CategoriesContext;
    // TagsContext
    const TagsContext = useContext(tagsContext);
    const {getTags, tags } = TagsContext;

    useEffect( () => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, [])

    useEffect( () => {
        getTags();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <div className="content-component_buttons">
                <button 
                    className="btn"
                    onClick={() => setComponent('add-product')}
                ><span>Agregar Productos</span><i className="fas fa-plus"></i></button>
                <button 
                    className="btn"
                    onClick={() => setComponent('list-products')}    
                ><span>Listar Productos</span> <i className="fas fa-tshirt"></i></button>
                <button className="btn">Buscar Productos <i className="fas fa-search"></i></button>
            </div>
            <div className="content-component_actions">
                {
                    component === 'add-product' && !cleanForm ?
                        <AddProduct 
                            categories={categories}
                            tags={tags}
                            addProduct={addProduct}
                        /> : null
                }
                {
                    component === 'list-products' && 
                        <ListProducts 
                            products={products}
                            deleteProduct={deleteProduct}
                        />
                }
            </div>
        </Fragment>
    );
}

export default ProductsAdmin;