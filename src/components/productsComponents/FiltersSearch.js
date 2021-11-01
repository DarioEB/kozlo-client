import React from 'react';

const FiltersSearch = () => {

    return (
        <div
            className="content-filters_search"
        >
            <p className="filter-title">Buscá por Nombre o Marca</p>
            <form className="form-search">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Busca por Marca y Nombre"
                />
                <button
                    type="submit"
                    className="btn-search"
                >
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}

export default FiltersSearch;