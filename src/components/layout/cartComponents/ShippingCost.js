import React from 'react';

const ShippingCost = ({
    handleShippingCost,
    zip,
    setZip,
    shopinit,
    setShopInit
}) => {

    

    const handleSubmit = () => {
        if(zip.trim() === '' || zip.trim().length < 4) {
            return;
        }
        handleShippingCost(zip.trim());
        setShopInit(true);
        setZip('');
    }

    return (
        <div className="content-cart_shipping-cost">
            <div>
                <input
                    type="text"
                    name="zip"
                    id="zip"
                    placeholder="Ingresa tu Código Postal"
                    onChange={e => setZip(e.target.value)}
                />
            </div>
            <div>
                <button
                    type="button"
                    className="btn"
                    onClick={handleSubmit}
                >
                    Calcular costo de envío
                </button>
            </div>
        </div>
    );
}

export default ShippingCost;