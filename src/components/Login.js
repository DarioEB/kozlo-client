import React,{Fragment, useContext, useEffect} from 'react';
//Layout
import Header from './layout/Header';
import Loader from './layout/Loader';
import ContentFormLogin from './loginComponents/ContentFormLogin';
import Information from './layout/Information';
// Context de categorías
import categoriesContext from '../contexts/categories/categoriesContext';
// Context de autenticacion
import authContext from '../contexts/auth/authContext';
// History
import { useHistory } from 'react-router-dom';
// Estilos
import './loginComponents/loginStyles.css';
const Login = () => {

    const CategoriesContext = useContext(categoriesContext);
    const {getCategories, categories, loadCategories} = CategoriesContext;

    const AuthContext = useContext(authContext);
    const { 
        login, 
        loadUser, 
        authenticatedUser, 
        authenticated, 
        user, 
        logout, 
        errorUser,
        message
    } = AuthContext; 
    
    const history = useHistory();

    useEffect( () => {
        authenticatedUser();
        if(authenticated) {
            if(user) {
                (user.type === 'admin') ? history.push("/admin") : history.push("/");
            }
        }
        // eslint-disable-next-line
    }, [ history, user, authenticated]);
    
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
            <ContentFormLogin 
                login={login}
                loadUser={loadUser}
                errorUser={errorUser}
                message={message}
            />    
            <Information />
        </Fragment>
    );
}

export default Login;