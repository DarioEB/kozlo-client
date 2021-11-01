import React, {useContext, useEffect} from 'react';
import checkoutContext from '../../contexts/checkout/checkoutContext';
import ContentCart from './ContentCart';
import ListData from './ListData';
import TargetData from './TargetData';
import { useHistory } from 'react-router-dom';
const CheckoutData = () => {

    const CheckoutContext = useContext(checkoutContext);
    const {
        cart,
        totalcost, 
        subtotal,
        shippingcost,
        setCheckoutData, 
        clientdata, 
        card 
    } = CheckoutContext;

    const history = useHistory();

    useEffect(() => {
        if(cart.products.length === 0) {
            history.goBack()
        }
        // eslint-disable-next-line
    }, [cart, history]);

    const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY);

    const createSelectOptions = (elem, options, labelsAndKeys = { label : "name", value : "id"}) => {
        const {label, value} = labelsAndKeys;
     
        elem.options.length = 0;
     
        const tempOptions = document.createDocumentFragment();
     
        options.forEach( option => {
            const optValue = option[value];
            const optLabel = option[label];
     
            const opt = document.createElement('option');
            opt.value = optValue;
            opt.textContent = optLabel;
     
            tempOptions.appendChild(opt);
        });
     
        elem.appendChild(tempOptions);
     }



    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1 className="title-logo">K<span>ozlo</span></h1>
                    <div className="content-payment">
                        <div className="content-payment_data">
                            <div className="data">
                                <ListData 
                                    clientdata={clientdata}
                                />
                                <TargetData
                                    createSelectOptions={createSelectOptions}
                                    mp={mp}
                                    totalcost={totalcost}
                                    subtotal={subtotal}
                                    shippingcost={shippingcost}
                                    setCheckoutData={setCheckoutData}
                                    card={card}
                                />
                            </div>
                        </div>
                        <div className="content-payment_cart">
                            <ContentCart 
                                cart={cart}
                                subtotal={subtotal}
                                shippingcost={shippingcost}
                                totalcost={totalcost}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckoutData;