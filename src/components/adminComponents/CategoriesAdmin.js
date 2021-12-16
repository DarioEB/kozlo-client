import React, { useEffect,  useContext } from 'react';
// Contexts
import categoriesContext from '../../contexts/categories/categoriesContext';
import AddCategory from './categoriesAdminComponent/AddCategory';
import ListCategories from './categoriesAdminComponent/ListCategories';
import {
    PlusCircleIcon,
    ChartSquareBarIcon,
    ViewListIcon
} from '@heroicons/react/outline';
import {
    ButtonsAction,
    BtnAction
} from '../UI';
import authContext from '../../contexts/auth/authContext';
import adminContext from '../../contexts/admin/adminContext';
import Bar from './Bar';
import Sidebar from './Sidebar';
import { Link, useParams } from 'react-router-dom';

const CategoriesAdmin = () => {

    const { component } = useParams()
    // CategoriesContext
    const CategoriesContext = useContext(categoriesContext);
    const { getCategories, categories, cleanForm, addCategory  } = CategoriesContext;

    // Auth
    const AuthContext = useContext(authContext);
    const {  user, authenticatedUser, logout } = AuthContext;
    // Admin
    const AdminContext = useContext(adminContext);
    const { content, changeContent } = AdminContext;

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

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
                            to={"/admin/categories/add-category"}
                            className="btn-action"
                        >
                            <PlusCircleIcon 
                                className="icon"
                            />
                            <span>Nueva Categoría</span>
                        </Link>
                    </BtnAction>
                    <BtnAction
                        className={``}
                    >
                        <Link
                            to={"/admin/categories/list-categories"}
                            className="btn-action"
                        >
                            <ViewListIcon 
                                className="icon"
                            />
                            <span>Ver Categorías</span>
                        </Link>
                    </BtnAction>
                    <BtnAction
                        className={``}
                    >
                        <Link
                            to={"/admin/categories/analytics"}
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
                    { (component === 'add-category' && !cleanForm) ? 
                        <AddCategory 
                            addCategory={addCategory}
                        /> : null }
                    { (component === 'list-categories') ? <ListCategories categories={categories} /> : null}
                </div>
            </div>
        </section>
    );
}

export default CategoriesAdmin;