import React,{ useState, useEffect, useContext } from 'react';
import PricesNWaists from './PricesNWaists';
import SelectWaistsNAmount from './SelectWaistsNAmount';
import WaistSelected from './WaistSelected';
import WhatsappNBrand from './WhatsappNBrand';
// Context
import checkoutContext from '../../contexts/checkout/checkoutContext'; 
import AlertFloat from '../alertComponents/AlertFloat';
const InformationProduct = ({product, authenticated, user}) => {

    const CheckoutContext = useContext(checkoutContext);
    const {cart, addProductToCart, addProductCart, setViewCartGlobal } = CheckoutContext;

    // State para almacenar el input de talle
    const [waist, setWaist] = useState(null);
    // State para almacenar la cantidad seleccionada
    const [amount, setAmount] = useState(1);
    // State para validar el maximo disponible
    const [max, setMax] = useState(null);
    // Enable shop
    const [shop, setShop] = useState(false);
    // Producto
    const [productCopy, setProductCopy] = useState({});
    // Error
    const [error, setError] = useState(false);
    // ViewalertAddToCart
    const [addSuccess, setAddSuccess] = useState(false);
    // ErrorWaist
    const [errorw, setErrorW] = useState(false);

    useEffect( () => {
        if(Object.keys(productCopy).length > 0) {
            if(productCopy.waists.length > 0) {
                setShop(true);
            }
        }

        // eslint-disable-next-line
    }, [productCopy]); 

    useEffect( () => {
        if(product) {
            setProductCopy({...product, waists: []});
        }
    }, [product])


    const confirmWaist = () => {
        if(!productCopy.waists.find(w => w.waist === waist)){
            setProductCopy({
                ...productCopy,
                waists: [...productCopy.waists, {waist, amount}]
            })
            setWaist(null);
        } 
        setAmount(1);
    }

    const removeWaist = (waist) => {
        if(waist.length === 1) setShop(false);
        setProductCopy({
            ...productCopy,
            waists: productCopy.waists.filter( w => w.waist !== waist)
        });
    }
    
    const handleWaist = (e, w) => {
        
        if(!productCopy.waists.map( w => w.waist).includes(w.waist)) {
            if(w.stock > 0) {
                setWaist(w.waist);
                setMax(w.stock)
            }
        } else {
            setErrorW(true);
            setTimeout( () => {
                setErrorW(false);
            }, 4200);
        }
        
    }

    const addToCartProduct = () => {
        if(productCopy.waists.length > 0 ) {
            if(!cart.products.map( product => product._id ).includes(product._id)) {
                if(authenticated) {
                    addProductToCart(productCopy, user);
                } else {
                    addProductCart(productCopy);
                }
                setAddSuccess(true);
                setProductCopy({
                    ...product,
                    waists: []
                });
                
                setMax(null);
                setShop(false);
                setViewCartGlobal(true);
                setTimeout( () => {
                    setAddSuccess(false);
                }, 4200);
            } else {
                setError(true);
                setTimeout( () => {
                    setError(false);
                }, 4200);
            }

        }

    }


    return (
        <div className="information-product">
            {
                addSuccess ? <AlertFloat message={"Producto agregado al carrito"} /> : null
            }
            {
                errorw ? <AlertFloat message={"El talle ya está seleccionado"} /> : null
            }
            {
                error ? <AlertFloat message={"Este producto ya existe en el carrito. Eliminelo y seleccione nuevamente."} /> : null
            }
            <WhatsappNBrand 
                product={product}
            />
            <div className="descriptions">
                <h1>{product.name}</h1>
                <PricesNWaists 
                    product={product}
                    handleWaist={handleWaist}
                />

                {waist ? (
                    <SelectWaistsNAmount 
                        waist={waist}
                        amount={amount}
                        setAmount={setAmount}
                        max={max}
                        confirmWaist={confirmWaist}
                    />
                ) : (
                    null
                )}
                {Object.keys(productCopy).length > 0 && productCopy.waists.length > 0 ?

                    (
                        <WaistSelected 
                            waists={productCopy.waists}
                            removeWaist={removeWaist}
                        />
                    ) : null}
                <div className="buttons">
                    <button
                        className={`btn ${shop ? 'enabled-shop' : 'disabled-shop'}`}
                        onClick={() => addToCartProduct()}
                    >
                        Agregar al carrito
                        <i className="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InformationProduct;