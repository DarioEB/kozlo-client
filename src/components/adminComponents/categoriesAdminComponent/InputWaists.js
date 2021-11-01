import React, { useState } from 'react';
import AlertField from '../../alertComponents/AlertField';

const InputWaists = ({
    category,
    setCategory,
    errors,
    handleBlur,
    setErrors
}) => {

    const [waist, setWaist] = useState('');

    const handleWaist = e => {
        e.preventDefault();
        if(waist !== '') {
            if(!category.waists.includes(waist)) {
                setCategory({
                    ...category,
                    waists: [...category.waists, waist]
                });
                setErrors({
                    ...errors,
                    waists: null
                });
            } else {
                setErrors({
                    ...errors,
                    waists: `El talle ${waist} ya fue está a la categoría`
                })
            }
        } else {
            setErrors({
                ...category,
                waists: `El campo talle no puede ir vacío`
            })
        }
    }

    return (
        <>
            <div className="field-admin_tw">
                <div className="field-admin">
                    <label htmlFor="waist">Talle (*)</label>
                    <input
                        type="text"
                        id="waist"
                        name="waist"
                        placeholder="Nombre del talle"
                        onChange={e => setWaist(e.target.value)}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="field-admin">
                    <label htmlFor="btn"></label>
                    <button
                        className="btn-add-waist"
                        onClick={e => handleWaist(e)}
                    >Agregar Talle</button>
                </div>
            </div>
            {errors.waists ? <AlertField message={errors.waists} /> : null}
        </>

    );
}

export default InputWaists;