import React, {Fragment, useEffect, useContext} from 'react';
import Header from './layout/Header';
import Whatsapp from './layout/Whatsapp';
import Footer from './layout/Footer';
import Loader from './layout/Loader';
// TermsComponents
import ContentTerms from './termsComponents/ContentTerms';
import categoriesContext from '../contexts/categories/categoriesContext';
import authContext from '../contexts/auth/authContext';
import './termsComponents/termsStyles.css';
const TermsConditions = () => {

    const CategoriesContext = useContext(categoriesContext);
    const { getCategories, categories, loadCategories } = CategoriesContext;
    
    const AuthContext = useContext(authContext);
    const { authenticatedUser, authenticated, user, logout } = AuthContext; 

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, [authenticated])

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);
    if(loadCategories || categories.length === 0) return <Loader />;
    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <ContentTerms />
            <Whatsapp />
            <Footer />
        </Fragment>
    );  
}

export default TermsConditions;