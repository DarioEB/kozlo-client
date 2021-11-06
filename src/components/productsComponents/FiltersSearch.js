import React, { useState, useContext } from 'react';
import productsContext from '../../contexts/products/productsContext';
const FiltersSearch = () => {

    const ProductsContext = useContext(productsContext);
    const { 
        filterSearch,
        removeFilterSearch
    } = ProductsContext;

    const [ search, setSearch ] = useState('');
    const [ filter, setFilter ] = useState();

    const handleSearch = e => {
        e.preventDefault();

        if(search !== '') {
            console.log('Filtro seleccionado');
            setFilter(true);
            filterSearch(search);
        }
    }

    const handleRemoveFilter = () => {
        setFilter(false);
        removeFilterSearch();
    }   

    return (
        <div
            className="content-filters_search"
        >
            <p className="filter-title">Buscá por Nombre o Marca</p>
            <form 
                className="form-search"
                onSubmit={handleSearch}    
            >
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Busca por Marca y Nombre"
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn-search"
                >
                    <i className="fas fa-search"></i>
                </button>
            </form>
            {
                filter ? 
                <div className="filter-search">
                    <span className="searching">{search}</span>
                    <button
                        onClick={() => handleRemoveFilter()}
                    >
                        <span className="fas fa-times"></span>
                    </button>
                </div>: null
            }
        </div>
    );
}

export default FiltersSearch;