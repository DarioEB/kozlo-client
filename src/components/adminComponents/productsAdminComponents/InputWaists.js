import React, { useState } from 'react';
import AlertField from '../../alertComponents/AlertField';

const InputWaists = ({category, product, setProduct, errors, handleBlur, setErrors}) => {

    // State local para los talles que se van seleccionando
    const [waist, setWaist] = useState({
        waist: '',
        stock: ''
    });

    const handleClickWaist = (e) => {
        e.preventDefault();
        if(waist.waist === '' || waist.stock === '' || parseInt(waist.stock) <= 0) {
            setErrors({
                ...errors,
                waists: `Debe completar los campos correctamente`
            })
            return;
        }
        if(!product.waists.find( w => w.waist === waist.waist)) {
            setProduct({
                ...product,
                waists: [...product.waists, waist]
            });
            setWaist({ 
                waist: '',
                stock: ''
            })
            setErrors({
                ...errors,
                waists: null
            })
        } else {
            setErrors({
                ...errors,
                waists: `El talle ${waist.waist} ya fue agregado`
            })
        }
    }

    return (
        <>
            <div className="field-admin_thr">
                <div className="field-admin">
                    <label htmlFor="waist">Talle <span>(*)</span></label>
                    <select
                        defaultValue={waist.waist}
                        id="waist"
                        name="waist"
                        onChange={(e) => {
                            setWaist({...waist, [e.target.name]: e.target.value})
                            // handleBlur(e);
                        }}
                    >
                        <option value="" disabled>-- Talle --</option>
                        {category.waists.map( (waist, i) => (
                            <option
                                key={i}
                                value={waist}
                            >{waist}</option>
                        ))}
                    </select>
                    
                </div>
                <div className="field-admin">
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        placeholder="En Stock"
                        value={waist.stock}
                        onChange={(e) =>{ 
                            setWaist({...waist, [e.target.name]: e.target.value})
                            
                        }}
                    />
                    
                    
                </div>
                <div className="field-admin">
                    <label htmlFor="btn"></label>
                    <button
                        className="btn-add-waist"
                        onClick={(e) => handleClickWaist(e)}
                    >Agregar Talle</button>
                </div>
            </div>
            {errors.waists ? <AlertField message={errors.waists} /> : null}
        </>
    );
}

export default InputWaists