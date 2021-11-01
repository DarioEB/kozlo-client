import React from 'react';

const ItemImage = ({changeImage, image, product}) => {


    return (
        <li
        >
            <img
                onClick={() => changeImage(image)}
                src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${image}`}
                alt={`Imagen ${product.name}`}
            />
        </li>
    );
}

export default ItemImage;