import React from 'react';
import{
    TrashIcon
} from '@heroicons/react/outline';
import {
    WaistsContent
} from '../../UI';

const WaistSelect = ({product, setProduct}) => {

    const handleClickDeleteWaist = (e, waist) => {
        e.preventDefault();
        setProduct({
            ...product,
            waists: product.waists.filter(w => w.waist !== waist.waist)
        });
    }

    return (
        <WaistsContent>
            <ul>
                {product.waists.map( (waist, i) => (
                    <li
                        key={i}
                    >
                        <div className="waist">
                            <p>Talle: {waist.waist}</p>
                        </div>
                        <div className="waist">
                            <p>stock: {waist.stock}</p>
                        </div>
                        <button
                            className="btn-delete"
                            onClick={(e) => handleClickDeleteWaist(e, waist)}
                        >
                            <TrashIcon 
                                className="icon"
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </WaistsContent>
    );
}

export default WaistSelect;