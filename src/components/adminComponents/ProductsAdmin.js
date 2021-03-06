import React, { useContext, useEffect } from 'react';
import AddProduct from './productsAdminComponents/AddProduct';
import ListProducts from './productsAdminComponents/ListProducts';
import {
    PlusCircleIcon,
    ChartSquareBarIcon,
    ViewListIcon
} from '@heroicons/react/outline';
import {
    ButtonsAction,
    BtnAction
} from '../UI';
import {
    Link,
    useParams
} from 'react-router-dom'
// Contexts
import authContext from '../../contexts/auth/authContext';
import productsContext from '../../contexts/products/productsContext';
import categoriesContext from '../../contexts/categories/categoriesContext';
import tagsContext from '../../contexts/tags/tagContext';
import Bar from './Bar';
import Sidebar from './Sidebar';
import Loader from '../layout/Loader';
import adminContext from '../../contexts/admin/adminContext';

// Layout Components
const ProductsAdmin = () => {

    const { component } = useParams();
    
    // ProductsContext
    const ProductsContext = useContext(productsContext);
    const {
        getProducts,
        addProduct, 
        cleanForm, 
        deleteProduct,
        getFilterProducts,
        filterProducts,
        getAllProducts,
        handleFilterSearch
    } = ProductsContext;
    // CategoriesContext
    const CategoriesContext = useContext(categoriesContext);
    const { getCategories, categories  } = CategoriesContext;
    // TagsContext
    const TagsContext = useContext(tagsContext);
    const {getTags, tags } = TagsContext;
    // Admin
    const AdminContext = useContext(adminContext);
    const { content, changeContent } = AdminContext;

    // Auth
    const AuthContext = useContext(authContext);
    const {  user, authenticatedUser, logout } = AuthContext;

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);


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
    
    if(!user) return <Loader />

    return (
        <section className="admin-container">
            <div className="content-nav-admin">
                <Bar 
                    logout={logout}
                    user={user}
                />
                <Sidebar 
                    content={content}
                    changeContent={changeContent}
                />
            </div>
            <div className="content-component-render-admin">
                <ButtonsAction>
                    <BtnAction
                        className={``}
                    >
                        <Link
                            to={"/admin/products/add-product"}
                            className="btn-action"
                        >
                            <PlusCircleIcon 
                                className="icon"
                            />
                            <span>Nuevo Producto</span>
                        </Link>
                    </BtnAction>
                    <BtnAction
                        className={``}
                    >
                        <Link
                            to={"/admin/products/list-products"}
                            className="btn-action"
                        >
                            <ViewListIcon 
                                className="icon"
                            />
                            <span>Ver Productos</span>
                        </Link>
                    </BtnAction>
                    <BtnAction
                        className={``}
                    >
                        <Link
                            to={"/admin/products/analytics"}
                            className="btn-action"
                        >
                            <ChartSquareBarIcon 
                                className="icon"
                            />
                            <span>Analytics</span>
                        </Link>
                    </BtnAction>
                </ButtonsAction>
                <div className="content-component_actions">
                    { (component === 'add-product' && !cleanForm) ? 
                        <AddProduct 
                            categories={categories}
                            tags={tags}
                            addProduct={addProduct} 
                        /> : null  }
                    { (component === 'list-products') ? 
                        <ListProducts
                            deleteProduct={deleteProduct}
                            categories={categories}
                            filterProducts={filterProducts}
                            getFilterProducts={getFilterProducts}
                            handleFilterSearch={handleFilterSearch}
                            getAllProducts={getAllProducts}
                        /> : null }
                </div>
            </div>
        </section>
    );
}

export default ProductsAdmin;