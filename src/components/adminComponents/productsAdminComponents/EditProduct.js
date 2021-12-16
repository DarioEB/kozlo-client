import React, {useContext, useEffect} from 'react';
import {
    Link,
    useParams
} from 'react-router-dom';
import authContext from '../../../contexts/auth/authContext';
import productsContext from '../../../contexts/products/productsContext';
import categoriesContext from '../../../contexts/categories/categoriesContext';
import tagsContext from '../../../contexts/tags/tagContext';
import adminContext from '../../../contexts/admin/adminContext';
// Layout
import Bar from '../Bar';
import Sidebar from '../Sidebar';
import Loader from '../../layout/Loader';
import { BtnAction, ButtonsAction } from '../../UI';
import { ChartSquareBarIcon, PlusCircleIcon, ViewListIcon } from '@heroicons/react/outline';
import Edit from './Edit';

const EditProduct = () => {

    const { id } = useParams();

    // ProductsContext
    const ProductsContext = useContext(productsContext);
    const {
        getProduct,
        product,
        updateProduct
    } = ProductsContext;

    // CategoriesContext
    const CategoriesContext = useContext(categoriesContext);
    const {getCategories, categories} = CategoriesContext;
    
    // TagsContext
    const TagsContext = useContext(tagsContext);
    const { getTags, tags} = TagsContext;

    // adminContext
    const AdminContext = useContext(adminContext);
    const { content, changeContent } = AdminContext;

    // Auth
    const AuthContext = useContext(authContext);
    const {
        user,
        authenticatedUser,
        logout
    } = AuthContext;

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        getProduct(id);
        // eslint-disable-next-line
    }, [id]);

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, [])

    useEffect( () => {
        getTags();
        // eslint-disable-next-line
    }, []);

    if(!user || !product || !categories || !tags) return <Loader />

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
                {
                    (product && categories && tags) ?
                    <Edit 
                        productEdit={product}
                        categories={categories}
                        tags={tags}
                        updateProduct={updateProduct}
                    /> : null
                }
            </div>
        </section>
    );
}

export default EditProduct;