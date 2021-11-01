import React from 'react';
// Link
import { Link } from 'react-router-dom';
// Imagen
import image from '../../images/slideMain/elegant-young.jpg'
// Styled Component
import styled from '@emotion/styled'
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
const MenuYoung = ({ categories, menuyoung, setMenuYoung }) => {

    return (
        <div
            onMouseEnter={() => setMenuYoung(true)}
            onMouseLeave={() => setMenuYoung(false)}
            className={`slide-menu ${menuyoung ? 'show-slide-menu' : ''}`}
        >
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
                                            to={`/young`}
                                            className="link"
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
    )

}

export default MenuYoung;