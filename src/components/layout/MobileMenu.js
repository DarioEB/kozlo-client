import React, { useState, useContext } from 'react';
import productsContext from '../../contexts/products/productsContext';
import { Link } from 'react-router-dom';
const MobileMenu = ({ mobilemenu, 
    categories, 
    tags, 
    setMobileMenu, 
    authenticated, 
    user, 
    logout,
    cleanCheckout
}) => {

    const ProductsContext = useContext(productsContext);
    const { addFilterCategory, filters } = ProductsContext;

    // const [viewyoung, setViewYoung] = useState(false);
    const [viewcategories, setViewCategories] = useState(false);
    const [viewtags, setViewTags] = useState(false);

    // const handleViewYoung = () => {
    //     setViewCategories(false);
    //     setViewTags(false);
    //     setViewYoung(!viewyoung);
    // }

    const handleViewCategories = () => {
        // setViewYoung(false);
        setViewTags(false);
        setViewCategories(!viewcategories);
    }

    const handleViewTags = () => {
        // setViewYoung(false);
        setViewCategories(false);
        setViewTags(!viewtags);
    }

    const handleCategory = (category) => {
        if (!filters.find(filter => filter._id === category._id)) {
            addFilterCategory(category);
        }
        setMobileMenu(false)
    }

    return (
        <section
            className={`mobile-menu ${mobilemenu ? 'show-mobile-menu' : 'hidden-mobile-menu'}`}
        >
            <div className="content-mobile-menu">
                <nav
                    className="nav-mobile-menu"
                >
                    {/* <div className="nav-mobile-menu_box"> */}
                        {/* <span
                            className={`link ${viewyoung ? 'link-d' : ''}`}
                            onClick={() => handleViewYoung()}
                        >
                            <span>Young</span>
                            <i className={`fas fa-chevron-${viewyoung ? 'up' : 'down'}`}></i>
                        </span> */}
                        {/* {
                            viewyoung ?
                                <ul className="items">
                                    {categories.map(category => (
                                        <li
                                            key={category._id}
                                        >
                                            <Link
                                                to={'/products'}
                                                className={`link ${viewyoung ? 'link-d' : ''}`}
                                            ><span>{category.name}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                                : null
                        } */}
                    {/* </div> */}
                    <div className="nav-mobile-menu_box">
                        <span
                            className={`link ${viewtags ? 'link-d' : ''}`}
                            onClick={() => handleViewTags()}    >
                            <span>Tags</span>
                            <i className={`fas fa-chevron-${viewtags ? 'up' : 'down'}`}></i>
                        </span>
                        {
                            viewtags ?
                                <ul className="items">
                                    {tags.map((tag, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Link
                                                to={`/products/${tag.route}`}
                                                className={`link ${viewtags ? 'link-d' : ''}`}
                                            ><span>{tag.name}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                                : null
                        }
                    </div>
                    <div className="nav-mobile-menu_box">
                        <span
                            className={`link ${viewcategories ? 'link-d' : ''}`}
                            onClick={() => handleViewCategories()}  >
                            <span>Categorías</span>
                            <i className={`fas fa-chevron-${viewcategories ? 'up' : 'down'}`}></i>
                        </span>
                        {
                            viewcategories ?
                                <ul className="items">
                                    {categories.map((category, i) => (
                                        <li
                                            key={category._id}
                                        >
                                            <Link
                                                to={'/products'}
                                                onClick={() => handleCategory(category)}
                                                className={`link ${viewcategories ? 'link-d' : ''}`}
                                            ><span>{category.name}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                                : null
                        }
                    </div>
                    <Link
                        to={'/contact'}
                    >
                        <span className="link"><span>Contacto</span></span>
                    </Link>
                </nav>
                {
                    authenticated && user ? (
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
                                onClick={() =>{ logout(); cleanCheckout()}}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    ):(
                        null
                    )
                }
            </div>
        </section>
    );
}

export default MobileMenu;