import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../contexts/auth/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
    
    const authsContext = useContext(authContext);
    const { authenticate, authenticatedUser, user } = authsContext;
    
    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);
    
    return  (
        <Route 
            { ...props } 
            render  =   { props => !authenticate && !user
                ?   
                    (
                        <Redirect 
                            to="/" 
                        />
                    ) 
                :   
                    (
                        <Component 
                            { ...props } 
                        />
                    )   
                        }   
        />
            )
}

export default PrivateRoute;