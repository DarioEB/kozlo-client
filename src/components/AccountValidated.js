import React, {useContext, Fragment, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import Header from './layout/Header';
import Information from './layout/Information';
import Loader from './layout/Loader';
import categoriesContext from '../contexts/categories/categoriesContext';
import authContext from '../contexts/auth/authContext';
import ContentAccountValidated from './loginComponents/ContentAccountValidated';
// Estilos
import './loginComponents/loginStyles.css';

const AccountValidated = () => {

    const validationId = useParams(); 

    const CategoriesContext = useContext(categoriesContext);
    const { categories, loadCategories, getCategories} = CategoriesContext;

    const AuthContext = useContext(authContext);
    const {
        authenticated, 
        logout, 
        accountValidation, 
        loadUser, 
        verify, 
        user,
        setVerify
    } = AuthContext;

    useEffect( () => {
        accountValidation(validationId.id);
        // eslint-disable-next-line
    }, [validationId])

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    if(
        loadCategories ||
        categories.length === 0 ||
        loadUser || 
        !user ) return <Loader />;


    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <ContentAccountValidated 
                user={user}
                verify={verify}
                setVerify={setVerify}
            />
            <Information /> 
        </Fragment>
    )
}

export default AccountValidated;