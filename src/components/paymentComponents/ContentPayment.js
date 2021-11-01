import React, { useContext, useEffect } from 'react';
import checkoutContext from '../../contexts/checkout/checkoutContext';
// Formularios de entrega
import ContactData from './ContactData';
// Datos de carrito (productos)
import ContentCart from './ContentCart';
import { useHistory } from 'react-router-dom';

const ContentPayment = ({user}) => {

    const CheckoutContext = useContext(checkoutContext);
    const { 
        cart, 
        handleChangeClientData, 
        clientdata,
        subtotal,
        shippingcost,
        totalcost
    } = CheckoutContext;
    
    const history = useHistory();

    useEffect(() => {
        if(cart.products.length === 0) {
            history.goBack()
        }
        if(user) {
            const { name, surname, email, phone } = user;
            
            handleChangeClientData({target: {name: "name",value: name}})
            handleChangeClientData({target: {name: "surname",value: surname}})
            handleChangeClientData({target: {name: "email",value: email}})
            handleChangeClientData({target: {name: "phone",value: phone}})
        }
        // eslint-disable-next-line
    }, [cart, history, user]);


    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1 className="title-logo">K<span>ozlo</span></h1>
                    <div className="content-payment">
                        <div className="content-payment_data">
                            <div className="data">
                                <ContactData 
                                    clientdata={clientdata}
                                    handleChangeClientData={handleChangeClientData}
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

export default ContentPayment;