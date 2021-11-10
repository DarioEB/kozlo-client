import React, { useState, useContext,  useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MenuCategories from './MenuCategories';
import MenuTags from './MenuTags';
import MenuYoung from './MenuYoung';
import Cart from './Cart';

import checkoutContext from '../../contexts/checkout/checkoutContext';
import MobileMenu from './MobileMenu';
import { useHistory } from 'react-router-dom';
const ContentLink = styled.div`
    .link {
        padding: 2rem .5rem;
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
        cursor: pointer;
        &:hover {
            i {
                background: transparent;
                color: var(--d);
            }
        }
        span {
            position: relative;
            transition: all .25s ease-in-out;
            &::before {
                position: absolute;
                top: 100%;
                left :0%;
                width: 0%;
                content: '';
                height: .1rem;
                background-color: var(--d);
                transition: all .25s ease-in-out;
                border-radius: 2rem;
            }
            &:hover {
                color: var(--d);
                
                &::before {
                    width: 100%;
                }
            }
        } 
    }
    
`

const Header = ({ categories, authenticated, user, logout }) => {

    const CheckoutContext = useContext(checkoutContext);
    const { 
        cart, 
        getCart, 
        subtotal,
        shippingcost,
        totalcost,
        cleanCheckout, 
        removeProductToCart, 
        removeProductCart,
        handleShippingCost,
        clientdata,
        viewCartGlobal,
        setViewCartGlobal
    } = CheckoutContext;

    const history = useHistory();

    const [menucategories, setMenuCategories] = useState(false);
    const [menutags, setMenuTags] = useState(false);
    const [menuyoung, setMenuYoung] = useState(false);
    const [viewcart, setViewCart] = useState(false);

    const tags = [
        {name: 'New', route: 'new'},
        // {name: 'Young'},
        {name: 'Outlet', route: 'outlet'},
        {name: 'Urbano', route: 'urban'},
        {name: 'Elegante', route: 'elegant'}
    ];

    useEffect( () => {
        if(authenticated) {
            if(user) {
                getCart(user);
                (user.type === 'admin') && history.push("/admin")
            }
        }
        // eslint-disable-next-line
    }, [authenticated, user, history])

    const [mobilemenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setViewCart(false);
        setMobileMenu(!mobilemenu);
    }

    const handleViewCart = () => {
        setMobileMenu(false);
        if(viewCartGlobal) {
            
            setViewCartGlobal(false);
            setViewCart(false);
        } else {
            setViewCartGlobal(true);
            setViewCart(true);    
        }
    }

    return (
        <header className="header">
            <div className="sec-header">
                <div className="container">
                    <div className="content-header">
                        <div 
                            onClick={() => handleMobileMenu()}
                            className={`menu-btn ${mobilemenu ? 'open' : ''}`}>
                            <div className="menu-btn-lines">

                            </div>
                        </div>
                        <div className="content-header_logo">
                            <Link
                                to={"/"}
                                className="link-logo"
                            >
                                K<span>ozlo.</span>
                            </Link>
                        </div>
                        <nav className="content-header_nav">
                            {/* <ContentLink>
                                <span
                                    className="link"
                                    onMouseEnter={() => setMenuYoung(true)}
                                    onMouseLeave={() => setMenuYoung(false)}
                                >
                                    <span>Young</span> <i className="fas fa-chevron-down"></i>
                                </span>
                            </ContentLink> */}
                            <ContentLink>
                                <span
                                    className="link"
                                    onMouseEnter={() => setMenuTags(true)}
                                    onMouseLeave={() => setMenuTags(false)}
                                >
                                    <span>Tags</span> <i className="fas fa-chevron-down"></i>
                                </span>
                            </ContentLink>
                            <ContentLink>
                                <span
                                    className="link"
                                    onMouseEnter={() => setMenuCategories(true)}
                                    onMouseLeave={() => setMenuCategories(false)}
                                >
                                    <span>Categorías</span> <i className="fas fa-chevron-down"></i>
                                </span>
                            </ContentLink>
                            <Link to="/contact" className="link">Contacto</Link>
                        </nav>
                        <div className="content-header_btn">
                            
                            {authenticated && user ?
                            (
                                <div className="session-buttons">
                                    <Link
                                        to={"/"}
                                        className="session-link"
                                    >
                                        Hola {user.name}
                                    </Link>
                                    <span className="_bar">|</span>
                                    <button
                                        to={'/'}
                                        className="session-link"
                                        onClick={ () => {logout(); cleanCheckout();}}
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            )
                            : 
                            (
                                <Link
                                    className="btn-link"
                                    to="/login"
                                >
                                    <i className="fas fa-user"></i>
                                </Link>
                            )}
                            <button
                                className="btn-link shop-cart"
                                onClick={() => handleViewCart()}
                            >
                                <i className="fas fa-shopping-bag"></i>
                                <p className="product-cart">{cart.products.length}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <MenuCategories
                    categories={categories}
                    menucategories={menucategories}
                    setMenuCategories={setMenuCategories}
                />
                <MenuTags 
                    tags={tags}
                    menutags={menutags}
                    setMenuTags={setMenuTags}
                />
                <MenuYoung 
                    categories={categories}
                    setMenuYoung={setMenuYoung}
                    menuyoung={menuyoung}
                />
                <MobileMenu 
                    mobilemenu={mobilemenu} 
                    categories={categories}
                    tags={tags}    
                    setMobileMenu={setMobileMenu}
                    authenticated={authenticated}
                    user={user}
                    logout={logout}
                    cleanCheckout={cleanCheckout}
                />
            </div>
            <Cart 
                viewcart={viewcart}
                cart={cart}
                subtotal={subtotal}
                shippingcost={shippingcost}
                totalcost={totalcost}
                removeProductToCart={removeProductToCart}
                user={user}
                removeProductCart={removeProductCart}
                handleShippingCost={handleShippingCost}
                clientdata={clientdata}
                viewCartGlobal={viewCartGlobal}
                setViewCartGlobal={setViewCartGlobal}
            />
        </header>
    );
}

export default Header;