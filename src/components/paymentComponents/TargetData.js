import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AlertField from '../alertComponents/AlertField';
const TargetData = ({ 
    createSelectOptions, 
    mp, 
    totalcost, 
    subtotal,
    shippingcost,
    setCheckoutData,
    card
}) => {

    const [cardNumber, setCardNumber] = useState('');
    const [tokenElement, setTokenElement] = useState('');
    const [idtype, setIdType] = useState('DNI');
    const [errors, setErrors] = useState({})
    const history = useHistory();

    useEffect(() => {
        // const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY);
    
        const getIdentificationTypes = async () => {
            try {
                const identificationTypes = await mp.getIdentificationTypes();
                const docTypeElement = document.getElementById('form-checkout__identificationType');
                console.log(identificationTypes);
                createSelectOptions(docTypeElement, identificationTypes)
            } catch (error) {
                return console.error('Error getting identificationTypes: ', error);
            }
        }
        getIdentificationTypes();
        // eslint-disable-next-line
    }, [createSelectOptions, mp]);

    const getIssuers = async () => {
        try {
            // const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY)
            const cardNumber = document.getElementById('form-checkout__cardNumber').value;
            const paymentMethodId = document.getElementById('MPHiddenInputPaymentMethod').value;
            const issuerElement = document.getElementById('form-checkout__issuer');

            const issuers = await mp.getIssuers({ paymentMethodId: paymentMethodId, bin: cardNumber.slice(0, 6) });

            createSelectOptions(issuerElement, issuers);

            getInstallments();
        } catch (e) {
            console.error('error getting issuers: ', e)
        }
    };

    
    // Step #getInstallments
    const getInstallments = async () => {
        try {
            // const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY)
            const installmentsElement = document.getElementById('form-checkout__installments')
            const cardNumber = document.getElementById('form-checkout__cardNumber').value;

            const installments = await mp.getInstallments({
                amount: `${totalcost}`,
                bin: cardNumber.slice(0, 6),
                paymentTypeId: 'credit_card'
            });

            createSelectOptions(installmentsElement, installments[0].payer_costs, { label: 'recommended_message', value: 'installments' })
        } catch (e) {
            console.error('error getting installments: ', e)
        }
    }

    const handleChangeCardNumber = async (e) => {

        setCardNumber(e.target.value);
        try {
            // const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY)
            const paymentMethodElement = document.getElementById('MPHiddenInputPaymentMethod');
            if (cardNumber.length < 6 && paymentMethodElement.value) return paymentMethodElement.value = "";

            if (cardNumber.length >= 6 && !paymentMethodElement.value) {
                let bin = cardNumber.substring(0, 6);
                const paymentMethods = await mp.getPaymentMethods({ 'bin': bin });
                
                const { id: paymentMethodID, additional_info_needed, issuer } = paymentMethods.results[0];
                console.log(paymentMethods.results[0].settings[0]);
                
                // Assign payment method ID to a hidden input.
                paymentMethodElement.value = paymentMethodID;

                // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
                // Otherwise we just create an option with the unique issuer and call getInstallments().
                additional_info_needed.includes('issuer_id') ? getIssuers() : (() => {
                    const issuerElement = document.getElementById('form-checkout__issuer');
                    createSelectOptions(issuerElement, [issuer]);

                    getInstallments();
                })()
            }

        } catch (error) {
            console.log(error);
        }

    }

    // CreateCardTOKEN
    const handleSubmit = async (e) => {
        let tk;
        e.preventDefault();
        try {
            if (!tokenElement) {
                const token = await mp.createCardToken({
                    cardNumber: document.getElementById('form-checkout__cardNumber').value,
                    cardholderName: document.getElementById('form-checkout__cardholderName').value,
                    identificationType: document.getElementById('form-checkout__identificationType').value,
                    identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
                    securityCode: document.getElementById('form-checkout__securityCode').value,
                    cardExpirationMonth: document.getElementById('form-checkout__cardExpirationMonth').value,
                    cardExpirationYear: document.getElementById('form-checkout__cardExpirationYear').value
                });

                setTokenElement(token.id);
                tk = token;
            }

            const payment = {
                transaction_amount: totalcost,
                subtotal: subtotal,
                shipping_cost: shippingcost,
                total_cost: totalcost,
                token: document.querySelector('#MPHiddenInputToken').value,
                description: '',
                installments: Number(document.querySelector('#form-checkout__installments').value),
                payment_method_id:  document.querySelector('#MPHiddenInputPaymentMethod').value,
                issuer_id: document.querySelector('#form-checkout__issuer').value,
                payer: {
                    email: document.querySelector('#form-checkout__cardholderEmail').value,
                    identification: {
                        type: document.querySelector('#form-checkout__identificationType').value,
                        number: document.querySelector('#form-checkout__identificationNumber').value
                    }
                }
            }
            
            const card = {
                cardname: document.getElementById('form-checkout__cardholderName').value,
                cardnumber: {
                    first_six: document.getElementById('form-checkout__cardNumber').value.substr(0, 6),
                    last_four: document.getElementById('form-checkout__cardNumber').value.substr(12, 4),
                }, 
                cardExpirationMonth: document.getElementById('form-checkout__cardExpirationMonth').value,
                cardExpirationYear: document.getElementById('form-checkout__cardExpirationYear').value,
                cardSecurityCode: document.getElementById('form-checkout__securityCode').value,
                cardIdentificationType: document.getElementById('form-checkout__identificationType').value,
                cardIdentificationNumber: document.getElementById('form-checkout__identificationNumber').value
            }

            setCheckoutData(payment, tk, card);
            history.push("/payment-confirm")
        } catch (error) {
            console.error('Error creating card token', error);
        }
    }

    const validationNumberId = (e) => {
        if(idtype === 'DNI') {
            (e.target.value.length > 8 || e.target.value.length <= 7) ? setErrors({...errors, numberIdentification: 'Número de DNI no válido'}) : setErrors({errors})  
        } else if (idtype === 'CI'){
            (e.target.value.length > 9 || e.target.value.length <= 1) ? setErrors({...errors, numberIdentification: 'Número de Cédula no válido'}) : setErrors({errors})
        } else if(idtype === 'LC') {
            (e.target.value.length > 7 || e.target.value.length <= 6) ? setErrors({...errors, numberIdentification: 'Número de L.C. no válido'}) : setErrors({errors})
        } else if(idtype === 'LE') {
            (e.target.value.length > 7 || e.target.value.length <= 6) ? setErrors({...errors, numberIdentification: 'Número de L.E. no válido'}) : setErrors({errors})
        } else if(idtype === 'Otro') {
            (e.target.value.length > 20 || e.target.value.length <= 5) ? setErrors({...errors, numberIdentification: 'Número de identificación no válido'}) : setErrors({errors})
        }
    }

   
    const handleInstallments = (e) => {
        console.log(e.target);
       
    }

    return (
        <div className="target-data">
            <form
                id="form-checkout"
                onSubmit={handleSubmit}
            >
                <div className="form-data_title">
                    <h4>Tarjeta de Crédito o Débito</h4>
                    <i className="fas fa-credit-card"></i>
                </div>
                <div className="field-data">
                    <label htmlFor="form-checkout__cardNumber">Número de tarjeta</label>
                    <input
                        type="text"
                        id="form-checkout__cardNumber"
                        placeholder="Numero de tarjeta"
                        onChange={handleChangeCardNumber}
                    />
                </div>
                <div className="field-data">
                    <label htmlFor="form-checkout__cardholderName">Titular</label>
                    <input
                        type="text"
                        name="cardholderName"
                        id="form-checkout__cardholderName"
                        placeholder="Titular de la tarjeta"
                    />
                </div>
                <div className="field-data-target">
                    <div className="field-data_date">
                        <label>Fecha de Expiración</label>
                        <div className="field-data_date-inputs">
                            <input
                                type="text"
                                id="form-checkout__cardExpirationMonth"
                                placeholder="MM"
                            />
                            <span>/</span>
                            <input
                                type="text"
                                id="form-checkout__cardExpirationYear"
                                placeholder="YY"
                            />
                        </div>
                    </div>
                    <div className="field-data_cvv">
                        <label htmlFor="form-checkout__securityCode">CVV</label>
                        {/* <div className="field-data_date-inputs"> */}
                        <input
                            type="text"
                            id="form-checkout__securityCode"
                            placeholder="CVV"
                        />
                        {/* </div> */}
                    </div>
                </div>
                <div className="field-data">
                    <label htmlFor="form-checkout__cardholderEmail">E-mail</label>
                    <input
                        type="email"
                        name="cardholderEmail"
                        id="form-checkout__cardholderEmail"
                        placeholder="E-mail"
                    />
                </div>
                <div className="field-data">
                    <label htmlFor="form-checkout__issuer">Banco Emisor</label>
                    <select
                        defaultValue=""
                        name="issuer"
                        id="form-checkout__issuer"
                    >
                        <option
                            value=""
                            disabled
                        >Seleccione el emisor</option>
                    </select>
                </div>

                <div className="field-data_tw">
                    <div className="field-data">
                        <label htmlFor="form-checkout__identificationType">Tipo de Identificación</label>
                        <select
                            defaultValue=""
                            name="identificationType"
                            id="form-checkout__identificationType"
                            onChange={(e) => setIdType(e.target.value) }
                        >
                            <option
                                value=""
                                disabled
                            >Tipo de documento</option>
                        </select>
                    </div>
                    <div className="field-data">
                        <label htmlFor="form-checkout__identificationNumber">Número identicación</label>
                        <input
                            type="text"
                            name="identificationNumber"
                            id="form-checkout__identificationNumber"
                            placeholder="Número de documento"
                            onBlur={validationNumberId}
                            onChange={validationNumberId}
                        />
                        {errors.numberIdentification ? <AlertField message={errors.numberIdentification} /> : null}
                    </div>
                </div>
                <div className="field-data">
                    <label htmlFor="form-checkout__installments">Coutas</label>
                    <select
                        defaultValue=""
                        name="installments"
                        id="form-checkout__installments"
                        onChange={handleInstallments}
                    >
                        <option
                            value=""
                            disabled
                        >Elige la cantidad de cuotas</option>
                    </select>
                    <input
                        id="MPHiddenInputPaymentMethod"
                        name="MPHiddenInputPaymentMethod"
                        type="hidden" />
                    <input
                        id="MPHiddenInputToken"
                        name="MPHiddenInputToken"
                        type="hidden"
                        value={tokenElement}
                    />
                </div>
                {/* <p id="summary">
                    Total al contado: <span id="total">$100</span>
                    Total financiado: <span id="total-financed">$100</span>
                    TEA: <span id="tea">0%</span>
                    CFT: <span id="cft">0%</span>
                </p> */}
                <div className="box-submit_data">
                    <button
                        type="submit"
                        className="btn-submit"
                    >
                        Realizar pedido
                    </button>
                </div>
            </form>
            <div className="target-image">
                <img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/online/575X40.jpg" 
                    title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago" 
                    width="575" height="40"/>
            </div>
        </div>
    );
}

export default TargetData;