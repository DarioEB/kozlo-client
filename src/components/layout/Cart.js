import React, {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import NotProducts from './cartComponents/NotProducts';
import CartProduct from './cartComponents/CartProduct';
import ShippingCost from './cartComponents/ShippingCost';
import CartViewCosts from './cartComponents/CartViewCosts';
import EditShippingCost from './cartComponents/EditShippingCost';
const Cart = ({ 
    viewcart, 
    cart, 
    subtotal, 
    shippingcost,
    totalcost,
    removeProductToCart, 
    user,
    removeProductCart,
    handleShippingCost,
    clientdata,
    viewCartGlobal,
    setViewCartGlobal
}) => {

    const history = useHistory();

    const [zip, setZip] = useState('');
    const [shopinit, setShopInit] = useState(false);

    const handleRemoveProductToCart = (product) => {
        
        if(user) {
            removeProductToCart({...cart, products: cart.products.filter( p => p._id !== product._id )})
        } else {
            removeProductCart(product);
        }
    }

    useEffect( () => {
        if(shippingcost === 0 || clientdata.zip === '' || clientdata.zip.length < 4){
            setShopInit(false);
        } else {
            setShopInit(true)
        }
        // eslint-disable-next-line
    }, [shippingcost, clientdata, setShopInit])

    const handleClickShop = () => {
        if(!shopinit) {
            return;
        }
        history.push('/payment-data')
    }


    return (
        <section className={`section-cart ${viewcart || viewCartGlobal ? 'view-section-cart' : 'hidden-section-cart'}`}>
            {cart.products.length === 0
                ? (
                    <NotProducts />
                )
                : (
                    <div className="content-cart">
                        <div className="content-cart_products">
                            {cart.products.map((product) => (
                                <CartProduct 
                                    key={product._id}
                                    product={product}
                                    handleRemoveProductToCart={handleRemoveProductToCart}
                                />
                            ))}
                        </div>
                        {
                            shippingcost === 0 ? 
                            <ShippingCost 
                                handleShippingCost={handleShippingCost}
                                zip={zip}
                                setZip={setZip}
                                shopinit={shopinit}
                                setShopInit={setShopInit}
                            />
                            : 
                            <EditShippingCost 
                                zip={zip}
                                setZip={setZip}
                                handleShippingCost={handleShippingCost}
                                shippingcost={shippingcost}
                                clientdata={clientdata}
                                shopinit={shopinit}
                                setShopInit={setShopInit}
                            />
                        }
                        <CartViewCosts 
                            subtotal={subtotal}
                            shippingcost={shippingcost}
                        />
                        <div
                            className="content-cart_total"
                        >
                            <p className="total">Total:</p>)
                            <p className="price-total">${totalcost.toFixed(2)}</p>
                        </div>
                        <div
                            className="content-cart_checkout"
                        >
                            <button
                                onClick={() => handleClickShop()}
                                className={`btn-checkout ${shopinit ? 'btn-checkout-enabled' : 'btn-checkout-disabled'}`}
                            >
                                Iniciar Compra
                            </button>
                        </div>
                    </div>
                )
            }
        </section>
    );
}

export default Cart;