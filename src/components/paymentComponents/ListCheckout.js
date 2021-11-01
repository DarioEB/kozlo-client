import React from 'react';



const ListCheckout = ({checkout, token, card}) => {

    return (
        <div className="list-data">
            <div className="form-data_title">
                <h4>Medio de Pago</h4>
                <i className="fas fa-credit-card"></i>
            </div>
            <div className="list-data_data">
                <div>
                    <p>Datos de tarjeta</p>
                    <span>Número de tarjeta: {card.cardnumber.first_six}******{card.cardnumber.last_four}</span>
                    <span>Titular: {card.cardname}</span>
                    <span>Fecha de expiración: {card.cardExpirationMonth} / {card.cardExpirationYear}</span>
                </div>
                <div>
                    <p>Identificación</p>
                    <span>Tipo de identificación: {card.cardIdentificationType}</span>
                    <span>Número de identicación: {card.cardIdentificationNumber}</span>
                </div>
            </div>
        </div>
    );
}

export default ListCheckout;