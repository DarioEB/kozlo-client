import React,{Fragment, useContext, useEffect, useState} from 'react';
// Parametro URL
import { useParams } from 'react-router-dom';
// ProductsComponent
import Presentation from './productsComponents/Presentation';
import Filters from './productsComponents/Filters';
import ListProducts from './productsComponents/ListProducts';
// Contexts
import categoriesContext from '../contexts/categories/categoriesContext';
import productsContext from '../contexts/products/productsContext';
import authContext from '../contexts/auth/authContext';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Whatsapp from './layout/Whatsapp';
import Information from './layout/Information';
import Loader from './layout/Loader';
// estilos
import './productsComponents/productsStyles.css';
const Products = () => {

    const { tag } = useParams();
    const [clase, setClase] = useState('');

    const CategoriesContext = useContext(categoriesContext);
    const ProductsContext = useContext(productsContext);

    const { getProducts, filterProducts, products, loadProducts, filters, getProductsFilter } = ProductsContext;
    const { getCategories, categories, loadCategories } = CategoriesContext; 

    const AuthContext = useContext(authContext);
    const { authenticatedUser, authenticated, user, logout } = AuthContext; 

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, [authenticated])

    useEffect( () => {
        if(filters.length > 0) {
            getProductsFilter() 
        } else {
            getProducts();
        }
        
        if(tag) {
            if(tag === 'new') {
                setClase('section-products_new');
            } else if(tag === 'urban') {
                setClase('section-products_urban');
            } else if(tag === 'elegant') {
                setClase('section-products_elegant')
            }
        } else {
            setClase('section-products_all')
        }
        // eslint-disable-next-line
    }, [tag]);

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    if(loadCategories ||
        loadProducts || 
        categories.length === 0) return <Loader />;


    

    return (
        <Fragment>
            <Header 
                categories={categories}
                authenticated={authenticated}
                user={user}
                logout={logout}
            />
            <Whatsapp />
            <Presentation 
                tag={tag}
                clase={clase}
            />
            <Information />
            <Filters 
                categories={categories}
            />
            {
                filterProducts.length === 0
                ? (
                    <ListProducts 
                        products={products} 
                        filters={filters}
                    />
                ) : (
                    <ListProducts 
                        products={filterProducts}
                        filters={filters}
                    />
                )
            }
            <Footer />
        </Fragment>
    );
}

export default Products;