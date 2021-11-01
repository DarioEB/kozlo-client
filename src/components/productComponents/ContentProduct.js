import React, { useState } from 'react';
import ProductImages from './ProductImages';
import {useHistory} from 'react-router-dom';
import InformationProduct from './InformationProduct';
const ContentProduct = ({product, authenticated, user}) => {
    const history = useHistory();

    const [listimages, setListImages] = useState(product.images);
    const [imagemain, setImageMain] = useState(product.images[0]);

    return (
        <section className="section section-product">
            <span className="back-layout">
                <span></span>
                <span className="back"></span>
            </span>
            <div className="container">
                <div className="content-product">
                    <div className="btn-back">
                        <button
                            to={'/products'}
                            className="link"
                            onClick={() => history.goBack()}
                        ><i className="fas fa-arrow-left"></i><span>Volver</span></button>
                    </div>
                    <div className="content-product_info">
                        <ProductImages
                            product={product}
                            listimages={listimages}
                            imagemain={imagemain}
                            setListImages={setListImages}
                            setImageMain={setImageMain}
                        />
                        <InformationProduct 
                            product={product}
                            authenticated={authenticated}
                            user={user}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentProduct;