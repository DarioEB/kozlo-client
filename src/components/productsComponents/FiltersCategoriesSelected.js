import React from 'react';

const FiltersCategoriesSeleted = ({filters, removeFilterCategory}) => {

    return (
        <div className="categories-selected">
            {
            filters.length === 0
            ? (
                <p>No hay filtros seleccionados.</p>
            ) : (
                <ul>
                    {
                        filters.map( filter => (
                            <li
                                key={filter._id}
                            >
                                <p>{filter.name}</p>
                                <button
                                    onClick={() => removeFilterCategory(filter)}
                                >
                                    <span className="fas fa-times"></span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )
            }
            
        </div>
    );
}

export default FiltersCategoriesSeleted;