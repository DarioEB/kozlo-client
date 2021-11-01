import React, {useContext, Fragment, useEffect} from 'react';
import Header from './layout/Header';
import Information from './layout/Information';
import Loader from './layout/Loader';
import categoriesContext from '../contexts/categories/categoriesContext';
import authContext from '../contexts/auth/authContext';
// Estilos
import './loginComponents/loginStyles.css';
import ContentVerify from './loginComponents/ContentVerify';
const VerifyAccount = () => {

    const CategoriesContext = useContext(categoriesContext);
    const { categories, loadCategories, getCategories} = CategoriesContext;

    const AuthContext = useContext(authContext);
    const {setVerify, user, authenticatedUser, authenticated, logout} = AuthContext;

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, [authenticated])

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        setVerify();
        // eslint-disable-next-line
    }, []);

    if(loadCategories ||
        categories.length === 0) return <Loader />;

    return (
        <Fragment >
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <ContentVerify 
                user={user}
            />
            <Information />
        </Fragment>
    )

}

export default VerifyAccount;