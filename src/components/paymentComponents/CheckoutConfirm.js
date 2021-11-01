import React from 'react';
import ListData from './ListData';
import ContentCart from './ContentCart';
import ListCheckout from './ListCheckout';
import Loader from '../layout/Loader';
const CheckoutConfirm = ({
    user, 
    cart, 
    handleClickConfirmPayment,
    clientdata,
    token,
    card,
    checkout,
    subtotal,
    shippingcost,
    totalcost,
    loadShop
}) => {

    if(loadShop) return <Loader />

    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1 className="title-logo">
                        <span>K<span>ozlo</span></span>
                    </h1>
                    <div className="content-payment">
                        <div className="content-payment_data">
                            <div className="data">
                                <ListData
                                    clientdata={clientdata}
                                />
                                <ListCheckout
                                    checkout={checkout}
                                    token={token}
                                    card={card}
                                />
                                <div className="box-submit_data">
                                    <button
                                        type="submit"
                                        className="btn-submit"
                                        onClick={e => handleClickConfirmPayment(e)}
                                    >
                                        Confirmar Pago
                                    </button>
                                </div>
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

export default CheckoutConfirm;