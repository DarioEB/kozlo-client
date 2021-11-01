import React from 'react';

const EditShippingCost = ({
    zip,
    setZip,
    handleShippingCost,
    shippingcost,
    clientdata,
    shopinit,
    setShopInit
}) => {

    const handleEditShippingCost = () => {
        handleShippingCost('0')
        setShopInit(false)
    }

    return (
        <div className="content-cart_shipping-cost">
            <div>
                <input
                    type="text"
                    name="zip"
                    id="zip"
                    disabled
                    value={`CP: ${clientdata.zip} - $${shippingcost}`}
                    placeholder="Ingresa tu Código Postal"
                />
            </div>
            <div>
                <button
                    type="button"
                    className="btn"
                    onClick={() => handleEditShippingCost()}
                >
                    Editar costo de envío
                </button>
            </div>
        </div>
    );
}

export default EditShippingCost;