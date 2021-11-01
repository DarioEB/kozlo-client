import React, {Fragment, useContext, useEffect} from 'react';
import categoriesContext from '../contexts/categories/categoriesContext';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Loader from './layout/Loader';
import Information from './layout/Information';
import './contactComponents/contactStyles.css';
import ContentContact from './contactComponents/ContentContact';
const Contact = () => {

    const CategoriesContext = useContext(categoriesContext);
    const { categories, loadCategories, getCategories } = CategoriesContext;


    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, [])

    if( loadCategories || categories.length === 0 ) return <Loader />

    return (
        <Fragment >
            <Header 
                categories={categories}
            />
            <ContentContact />
            <Information />
            <Footer />
        </Fragment>
    );
}

export default Contact;