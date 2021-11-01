import React from 'react';

const SelectWaistsNAmount = ({waist, amount, setAmount, max, confirmWaist}) => {

    return (
        <div className="select-amount">
            <div className="others">
                <p>Talles seleccionados</p>
            </div>
            <div
                className="field-shop"
            >
                <div className="waist">
                    <p>Talle: {waist}</p>
                </div>
                <div className="field-shop_controls">
                    <span
                        className="fas fa-minus"
                        onClick={() => {
                            if (amount > 1) {
                                setAmount(amount - 1)
                            }
                        }}
                    ></span>
                    <div className="field-shop_text">
                        {/* <p className="text">Cantidad</p> */}
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            min="0"
                            disabled
                            value={amount}
                        />
                    </div>
                    <span
                        className="fas fa-plus"
                        onClick={() => {
                            if (amount < max) {
                                setAmount(amount + 1)
                            }
                        }}
                    ></span>
                </div>
                <div className="box-confirm-waist">
                    <button
                        className="confirm-waist"
                        onClick={() => confirmWaist()}
                    >Confirmar</button>
                </div>
            </div>

        </div>
    );
}

export default SelectWaistsNAmount;