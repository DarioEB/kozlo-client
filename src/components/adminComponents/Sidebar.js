import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const AsideContainer = styled.div`
    position: static;
    width: 100%;
    display: block;
    background-color: var(--g);
    @media (min-width: 768px) {
        position: fixed;
        width: 20rem;
        left: 0%;
        top: 0%;
        height: 100%;
    }
`

const AsideContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2rem;
`

const AsideHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10rem;
    background-color: var(--b);
    .title-admin {
        font-size: 2.8rem;
        font-family: var(--fontLogo);
        text-transform: uppercase;
        color: var(--d);
        cursor: pointer;
        span {
            display: inline-block;
            font-size: 2.2rem;
        }
    }
    @media (min-width: 768px) {
        
        height: 20rem;
        .title-admin {
            font-size: 3.4rem;
            span {
                font-size: 2.6rem;
            }
        }
    }
`

const AsideNav = styled.nav`

    padding: 1rem 0 2rem 0;
    ul {
        display: flex;
        flex-direction: column;
        li {
            display: flex;
            flex-direction: column;
            padding: 0;margin: 0;
            .btn-aside-nav {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 1.4rem;
                text-transform: uppercase;
                padding: 1.5rem 0;
                color: var(--wl);
                &:hover {
                    cursor: pointer;
                    color: var(--w);
                    background-color: var(--b);
                }
                border-bottom: .1rem solid var(--b);
            }   
            &:last-of-type {
                .btn-aside-nav {
                    border-bottom: none;
                }
            }
        }
    }
    @media (min-width: 768px) {
        ul {
            li {
                .btn-aside-nav {
                    font-size: 1.6rem;
                    &.active {
                        border-right: .5rem solid var(--b);
                    }
                }
            }
        }
    }
`

const Sidebar = ({content, changeContent}) => {

    return (
        <AsideContainer>
            <AsideContent>
                <AsideHeader>
                    <Link
                        to={"/"}
                        className="title-admin"
                    >K<span>ozlo</span></Link>
                </AsideHeader>
                <AsideNav>
                    <ul>
                        <li>
                            <Link 
                                to={"/admin/products"}
                                className={`btn-aside-nav ${content === 'products-admin' ? 'active' : '' }`}
                                // onClick={() => changeContent('products-admin')}
                            >Productos</Link>
                        </li>
                        <li>
                            <Link 
                                to={"/admin/categories"}
                                className={`btn-aside-nav ${content === 'products-admin' ? 'active' : '' }`}
                                // onClick={() => changeContent('products-admin')}
                            >Categorías</Link>
                        </li>
                        <li>
                            <button 
                                className={`btn-aside-nav ${content === 'client-admin' ? 'active' : '' }`}
                                onClick={() => changeContent('client-admin')}
                            >Clientes</button>
                        </li>
                        <li>
                            <button 
                                className={`btn-aside-nav ${content === 'users-admin' ? 'active' : '' }`}
                                onClick={() => changeContent('users-admin')}
                            >Usuarios</button>
                        </li>
                        <li>
                            <button
                                className={`btn-aside-nav ${content === 'orders-admin' ? 'active' : '' }`}
                                onClick={() => changeContent('orders-admin')}
                            >Pedidos</button>
                        </li>
                    </ul>
                </AsideNav>
            </AsideContent>
        </AsideContainer>
    );
}

export default Sidebar;