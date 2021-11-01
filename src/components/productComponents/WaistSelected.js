import React from 'react';

const WaistSelected = ({waists, removeWaist}) => {

    return (
        <div
            className="waist-selected"
        >
            <div className="others">
                <p>Talles seleccionados</p>
            </div>
            <ul>
                {waists.map((waist, i) => (
                    <li
                        key={i}
                    >
                        <div className="info">
                            <p>Talle {waist.waist}</p>
                            <p className="amount">Cantidad: {waist.amount}</p>
                        </div>
                        <i 
                            className="fas fa-trash-alt"
                            title="Eliminar Talle"    
                            onClick={() => removeWaist(waist.waist)}
                        ></i>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default WaistSelected;