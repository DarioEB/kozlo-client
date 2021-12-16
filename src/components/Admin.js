import React, { useContext, useEffect } from 'react';
// AdminComponents
import Bar from './adminComponents/Bar';
import Sidebar from './adminComponents/Sidebar';
import Content from './adminComponents/Content';
// Styles
import './adminComponents/adminStyles.css';
// Context
import adminContext from '../contexts/admin/adminContext';
import authContext from '../contexts/auth/authContext';
import Loader from './layout/Loader';
const Admin = (props) => {
    // Admin
    const AdminContext = useContext(adminContext);
    const { content, changeContent } = AdminContext;
    // Auth
    const AuthContext = useContext(authContext);
    const {  user, authenticatedUser, logout } = AuthContext;

    useEffect( () => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);

    if(!user) return <Loader />

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
            <Content 
                content={content}
            />
        </section>
    );
}

export default Admin;