import React from 'react';
import ItemImage from './ItemImage';

const Images = ({
    product,
    listimages,
    imagemain,
    setListImages,
    setImageMain
}) => {

    const changeImage = (image) => {
        
        setListImages([...product.images.filter(img => img !== image), imagemain]);
        setImageMain(image);
    }

    return (
        <div className="images">
            <div className="min-images_views">
                <ul className="">
                    {listimages.map((image, i) => (
                        <ItemImage 
                            key={i}
                            changeImage={changeImage}
                            image={image}
                            product={product}
                        />
                    ))}
                </ul>
            </div>
            <div className="max-image">
                <div>
                    <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${imagemain}`}
                        alt={`Imagen principal ${product.name}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Images;