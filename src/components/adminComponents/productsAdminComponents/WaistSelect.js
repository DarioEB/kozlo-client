import React from 'react';

const WaistSelect = ({product, setProduct}) => {

    const handleClickDeleteWaist = (e, waist) => {
        e.preventDefault();
        setProduct({
            ...product,
            waists: product.waists.filter(w => w.waist !== waist.waist)
        });
    }

    return (
        <div className="content-waist-select">
            <ul>
                {product.waists.map( (waist, i) => (
                    <li
                        key={i}
                    >
                        <div className="content-waist-select_name">
                            <p>{waist.waist}</p>
                        </div>
                        <div className="content-waist-select_stock">
                            <p>{waist.stock}</p>
                        </div>
                        <div className="content-waist-select_btn">
                            <button
                                onClick={(e) => handleClickDeleteWaist(e, waist)}
                            >Eliminar Talle</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WaistSelect;