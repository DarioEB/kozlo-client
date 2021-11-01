import React, { useContext } from 'react';
// Contexts
import productsContext from '../../contexts/products/productsContext';

const FiltersPrices = () => {

    const ProductsContext = useContext(productsContext);

    const {
        addFilterPrice
    } = ProductsContext;

    const handleChangePrice = (e) => {
        
        addFilterPrice(e.target.value);
    }

    return (
        <div
            className="content-filters_prices"
        >
            <p className="filter-title">Filtrá por rango de precios</p>
            <form>
                <select
                    onChange={handleChangePrice}
                >
                    <option
                        value="0"
                    >-- Todos --</option>
                    <option
                    
                        value="1"
                    >Hasta $5000</option>
                    <option
                        value="2"
                    >$5000 - $10000</option>
                    <option
                        value="3"
                    >$10000 - $15000</option>
                    <option
                        value="4"
                    >Mayor a $15000</option>
                </select>
            </form>
        </div>
    );
}

export default FiltersPrices;