import React from 'react';

const PricesNWaists = ({product, handleWaist}) => {
    

    return (
        <div className="others">
            
            {
                product.discount === 0 ?
                <div className="others-prices">
                    {/* <p className="discount">Precio: <span>${product.price}</span></p> */}
                    <p className="total">Total: <span>${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</span></p>
                </div>
                : 
                <div className="others-prices">
                    <p className="discount">Precio: <span>${(product.price).toFixed(2)}</span></p>
                    <p className="total">Total: <span>${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</span></p>
                </div>
            }
            <p>Talles disponibles</p>
            <span>selecciona el talle para ingresar la cantidad que deseas</span>
            <ul>
                {product.waists.map(waist => (
                    <li
                        key={waist.waist}
                        onClick={(e) => handleWaist(e, waist)}
                    >
                        <button>
                            Talle {waist.waist}
                        </button>
                        {
                            waist.stock > 0 ? 
                            <span>{waist.stock} {waist.stock > 1 ? 'disponibles' : 'disponible'}</span>
                            : <span>No disponible</span>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PricesNWaists;