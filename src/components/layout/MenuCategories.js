import React, { useContext } from 'react';
// Link
import { Link } from 'react-router-dom';
// Imagen
import image from '../../images/portada/2.jpg'
// Styled Component
import styled from '@emotion/styled'
// Contexts
import productsContext from '../../contexts/products/productsContext';
const Li = styled.li`
    .link {
        position: relative;
        transition: all .25s ease-in-out;
        &::before {
            content: '';
            position: absolute;
            width: 0%;
            top: 100%;
            left: 0%;
            height: .1rem;
            background-color: var(--dll);
            transition: all .25s ease-in-out;
        }

        &:hover {
            color: var(--d);
            &::before {
                background-color: var(--d);
                width: 100%;
            }
        }
    }
`
const MenuCategories = ({ categories, menucategories, setMenuCategories }) => {

    const ProductsContext = useContext(productsContext);
    const { addFilterCategory, filters } = ProductsContext;

    const handleCategory = (category) => {
        if(!filters.find(filter => filter._id === category._id)) {
            addFilterCategory(category);
        }
    }

    return (
        <div 
            onMouseEnter={() => setMenuCategories(true)}
            onMouseLeave={() => setMenuCategories(false)}
            className={`slide-menu ${menucategories ? 'show-slide-menu' : ''}`}>
            <div className="container">
                <div className="content">
                    <div className="content-menu">
                        <div className="content-menu_list">
                            <ul>
                                {categories.map(category => (
                                    <Li
                                        key={category._id}
                                    >
                                        <Link
                                            to={`/products`}
                                            className="link"
                                            onClick={() => handleCategory(category)}
                                        >
                                            {category.name}
                                        </Link>
                                    </Li>
                                ))}
                            </ul>
                        </div>
                        <div className="content-menu_image">
                            <div>
                                <img
                                    src={image}
                                    alt="Imagen de Men Style"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCategories;