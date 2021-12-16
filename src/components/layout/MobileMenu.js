import React, { useState, useContext } from 'react';
import productsContext from '../../contexts/products/productsContext';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ContentMobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 6rem;
    & > nav {
        display: block;
        & > ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            & > li {
                border-bottom: .1rem solid var(--g);
                overflow: hidden;
                .nav-menu {
                    transition: all .25s ease-out;
                    max-height: 0;
                    transform: translateY(-100%);
                    opacity: 0;
                    padding: 0;
                    &.view-tags {
                        max-height: 100rem;
                        transform: translateY(0);
                        opacity: 1;
                    }
                    ul {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        row-gap: 2rem;
                        /* display: flex; */
                        /* flex-direction: column; */
                        padding: 1rem 0 1.5rem 0;
                        background: var(--dll);
                        li {
                            text-align: left;
                            .btn-link-mobile {
                                padding: 0 1.5rem;
                                font-size: 1.55rem;
                                color: var(--wll);
                                text-transform: uppercase;
                                span {
                                    font-weight: 300;
                                    border-bottom: .1rem solid var(--wll);
                                }
                            }
                        }
                    }
                }
                padding: 0 .5rem 1rem .5rem;
                &:last-of-type {
                    border-bottom: none;
                    padding: 0 .5rem;
                }
                .btn-mobile {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    color: var(--d);
                    padding: 1rem .5rem;
                    font-size: 1.6rem;
                    transition: all .25s ease-out;
                    & > span {
                        font-weight: 500;
                        text-transform: uppercase;
                    }
                    &.rotate {
                        i {
                            transform: rotate(180deg);
                        }
                    }
                    i {
                        
                        transition: all .25s ease-out;
                        color: var(--d);
                        background: var(--dl);
                        width: 2.5rem;
                        height: 2.5rem;
                        display: flex;
                        border-radius: 50%;
                        align-items: center; justify-content: center;
                    }
                }
            }
        }
    }
`


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
            <ContentMobileMenu>
                <nav>
                    <ul>
                        <li>
                            <button
                                className={`btn-mobile ${viewtags ? 'rotate' : ''}`}
                                onClick={() => handleViewTags()}
                            >
                                <span>Tags</span>
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <nav className={`nav-menu ${viewtags ? 'view-tags' : ''}`}>
                                <ul className="">
                                    {tags.map( (tag, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Link
                                                to={"/products"}
                                                className="btn-link-mobile"
                                            >
                                                <span>{tag.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </li>
                        <li>
                            <button
                                className={`btn-mobile ${viewcategories ? 'rotate' : ''}`}
                                onClick={() => handleViewCategories()}
                            >
                                <span>Categorías</span>
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <nav className={`nav-menu ${viewcategories ? 'view-tags' : ''}`}>
                                <ul className="">
                                    {categories.map( (category, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Link
                                                to={"/products"}
                                                className="btn-link-mobile"
                                                onClick={() => handleCategory(category)}
                                            >
                                                <span>{category.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </li>
                        <li>
                            <Link
                                className="btn-mobile"
                                to={"/contact"}
                            >
                                <span>Contacto</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </ContentMobileMenu>
        </section>
    );
}

export default MobileMenu;