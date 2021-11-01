import React from 'react';

const ListData = ({clientdata}) => {


    return (
        <div className="list-data">
            <div className="form-data_title">
                <h4>Envío a domicilio</h4>
                <i className="fas fa-truck"></i>
            </div>
            <div className="list-data_data">
                <div>
                    <p>E-mail</p>
                    <span>{clientdata.email}</span>
                </div>
                <div>
                    <p>Domicilio de facturación y de Entrega</p>
                    <span>{clientdata.name} {clientdata.surname}</span>
                    <span>{clientdata.phone}</span>
                    <span>{clientdata.street} {clientdata.number}, CP: {clientdata.zip}</span>
                    {clientdata.department.trim() !== '' ? <span>Depto: {clientdata.department}</span> : null}
                    {clientdata.suburb.trim() !== '' ? <span>Barrio: {clientdata.suburb}</span> : null}
                    <span>{clientdata.city}, {clientdata.province}</span>
                </div>
            </div>
        </div>
    );
}

export default ListData;