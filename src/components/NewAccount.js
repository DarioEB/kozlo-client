import React, { Fragment, useContext, useEffect } from 'react';
//Layout
import Header from './layout/Header';
import Loader from './layout/Loader';
import Information from './layout/Information';
import ContentFormNewAccount from './loginComponents/ContentFormNewAccount';
// Context de categorías
import categoriesContext from '../contexts/categories/categoriesContext';
import authContext from '../contexts/auth/authContext';
// Estilos
import './loginComponents/loginStyles.css';
// History
import { useHistory } from 'react-router-dom';
const NewAccount = () => {
    const CategoriesContext = useContext(categoriesContext);
    const {getCategories, categories, loadCategories} = CategoriesContext;
    const AuthContext = useContext(authContext);
    const { 
        loadUser, 
        authenticatedUser,
        authenticated, 
        user, 
        logout, 
        verify, 
        newAccount, 
        message,
        errorUser } = AuthContext; 
    const history = useHistory();

    useEffect( () => {
        authenticatedUser();
        if(authenticated) {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [authenticated, history])

    useEffect( () => {
        if(verify) {
            history.push('/account/verify');
        }
    }, [verify, history]);

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    

    if(categories.length === 0 || loadCategories) {
        return <Loader />
    }

    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <ContentFormNewAccount 
                newAccount={newAccount}
                message={message}
                loadUser={loadUser}
                errorUser={errorUser}
            />
            <Information />
        </Fragment>
    );
}

export default NewAccount;