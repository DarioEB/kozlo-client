import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AlertField from '../alertComponents/AlertField';

function validation(values) {
    let errors = {};

    if (values.email === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'El email ingresado no es válido';
    }
    if (values.country === '' || values.country !== 'Argentina') {
        errors.country = 'Este campo es obligatorio'
    }
    if(values.zip === '' || values.zip.length < 4) {
        errors.zip = 'Este campo es obligatorio'
    }
    if(values.name === '') {
        errors.name = 'Este campo es obligatorio';
    }
    if(values.surname === '') {
        errors.surname = 'Este campo es obligatorio';
    }
    if(values.phone === '') {
        errors.phone = 'Este campo es obligatorio';
    }
    if(values.street === '') {
        errors.street = 'Este campo es obligatorio'
    }
    if(values.number === '') {
        errors.number = 'Este campo es obligatorio';
    }
    
    if(values.city === '') {
        errors.city = 'Este campo es obligatorio'
    }
    if(values.province === '') {
        errors.province = 'Este campo es obigatorio';
    }
    if(values.dnicuil === '') {
        errors.dnicuil = 'Este campo es obligatorio';
    }

    return errors;
}   

const ContactData = ({ 
    clientdata, 
    handleChangeClientData
}) => {

    const history = useHistory();
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const getErrors = validation(clientdata);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;
        if(noErrors) {
            history.push('/payment-checkout');
        }
    }

    const handleBlur = (e) => {
        if(e.target.name === 'email') {
            if (e.target.value === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Email no válido'
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: null
                })
            }
        } 
        else if(e.target.name === 'zip') {
            if(e.target.value === '' || e.target.value.length < 4) {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Código Postal no válido'
                })
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: null
                })
            }
        }
        else {
            if(e.target.value === '') {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Este campo no puede ir vacío'
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: null
                })
            }
        }
    }

    return (
        <div className="form-data">
            <form
                onSubmit={handleSubmit}
            >
                <div className="form-data_title">
                    <h4>Datos de Contacto</h4>
                    <i className="fas fa-inbox"></i>
                </div>
                <div className="field-data">
                    <label htmlFor="email">E-mail <span>(*)</span></label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className={`${errors.email ? 'error' : ''}`}
                        value={clientdata.email}
                        onChange={handleChangeClientData}
                        onBlur={handleBlur}
                    />
                    {errors.email ? <AlertField message={errors.email} /> : null}
                </div>
                <div className="field-data_tw">
                    <div className="field-data">
                        <label htmlFor="country">País <span>(*)</span></label>
                        <input 
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Páis"
                            className={`complete ${errors.email ? 'error' : ''}`}
                            value={clientdata.country}
                            onChange={handleChangeClientData}
                            disabled
                        />
                        {errors.country ? <AlertField message={errors.country} /> : null}
                    </div>
                    <div className="field-data">
                        <label htmlFor="zip">CP <span>(*)</span></label>
                        <input 
                            type="text"
                            name="zip"
                            id="zip"
                            placeholder="Código Postal"
                            value={clientdata.zip}
                            disabled
                            className={`complete ${errors.email ? 'error' : ''}`}
                            onChange={handleChangeClientData}
                            onBlur={handleBlur}
                        />
                        {errors.zip ? <AlertField message={errors.zip} /> : null}
                    </div>
                </div>
                <div className="field-data">
                    <label htmlFor="name">Nombre <span>(*)</span></label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Tu Nombre"
                        className={`${errors.name ? 'error' : ''}`}
                        value={clientdata.name}
                        onChange={handleChangeClientData}
                        onBlur={handleBlur}
                    />
                    {errors.name ? <AlertField message={errors.name} /> : null}
                </div>
                <div className="field-data">
                    <label htmlFor="surname">Apellido <span>(*)</span></label>
                    <input 
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Tu Apellido"
                        className={`${errors.surname ? 'error' : ''}`}
                        value={clientdata.surname}
                        onChange={handleChangeClientData}
                        onBlur={handleBlur}
                    />
                    {errors.surname ? <AlertField message={errors.surname} /> : null}
                </div>
                <div className="field-data">
                    <label htmlFor="phone">Teléfono <span>(*)</span></label>
                    <input 
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Número de Teléfono"
                        className={`${errors.phone ? 'error' : ''}`}
                        value={clientdata.phone}
                        onChange={handleChangeClientData}
                        onBlur={handleBlur}
                    />
                    {errors.phone ? <AlertField message={errors.phone} /> : null}
                </div>
                <div className="form-data_title">
                    <h4>Datos para la Entrega</h4>
                    <i className="fas fa-box"></i>
                </div>
                <div className="field-data_tw">
                    <div className="field-data">
                        <label htmlFor="street">Calle <span>(*)</span></label>
                        <input 
                            type="text"
                            name="street"
                            id="street"
                            placeholder="Calle"
                            className={`${errors.street ? 'error' : ''}`}
                            value={clientdata.street}
                            onChange={handleChangeClientData}
                            onBlur={handleBlur}
                        />
                        {errors.street ? <AlertField message={errors.street} /> : null}
                    </div>
                    <div className="field-data">
                        <label htmlFor="number">Número <span>(*)</span></label>
                        <input 
                            type="text"
                            name="number"
                            id="number"
                            placeholder="Número o Altura"
                            className={`${errors.number ? 'error' : ''}`}
                            value={clientdata.number}
                            onChange={handleChangeClientData}
                            onBlur={handleBlur}
                        />
                        {errors.number ? <AlertField message={errors.number} /> : null}
                    </div>
                </div>
                <div className="field-data_tw">
                    <div className="field-data">
                        <label htmlFor="department">Departamento <span>(opcional)</span></label>
                        <input 
                            type="text"
                            name="department"
                            id="department"
                            placeholder="Número Departamento | Piso"
                            value={clientdata.department}
                            onChange={handleChangeClientData}
                        />
                        
                    </div>
                    <div className="field-data">
                        <label htmlFor="suburb">Barrio <span>(opcional)</span></label>
                        <input 
                            type="text"
                            name="suburb"
                            id="suburb"
                            placeholder="Barrio"
                            value={clientdata.suburb}
                            onChange={handleChangeClientData}
                        />
                    </div>
                </div>
                <div className="field-data_tw">
                    <div className="field-data">
                        <label htmlFor="city">Cuidad <span>(*)</span></label>
                        <input 
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Ciudad"
                            value={clientdata.city}
                            className={`${errors.city ? 'error' : ''}`}
                            onChange={handleChangeClientData}
                            onBlur={handleBlur}
                        />
                        {errors.city ? <AlertField message={errors.city} /> : null}
                    </div>
                    <div className="field-data">
                        <label htmlFor="province">Provincia <span>(*)</span></label>
                        <input 
                            type="text"
                            name="province"
                            id="province"
                            placeholder="Provincia"
                            className={`${errors.province ? 'error' : ''}`}
                            value={clientdata.province}
                            onChange={handleChangeClientData}
                            onBlur={handleBlur}
                        />
                        {errors.province ? <AlertField message={errors.province} /> : null}
                    </div>
                </div>
                <div className="form-data_title">
                    <h4>Datos de facturación</h4>
                    <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <div className="field-data">
                    <label htmlFor="dnicuil">DNI <span>(*)</span></label>
                    <input 
                        type="text"
                        name="dnicuil"
                        id="dnicuil"
                        placeholder="DNI / CUIL"
                        className={`${errors.dnicuil ? 'error' : ''}`}
                        value={clientdata.dnicuil}
                        onChange={handleChangeClientData}
                        onBlur={handleBlur}
                    />
                    {errors.dnicuil ? <AlertField message={errors.dnicuil} /> : null}
                </div>
                <div className="box-submit_data">
                    <button
                        type="submit"
                        className="btn-submit"
                    >
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactData;