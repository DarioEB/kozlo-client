import React, { useContext } from 'react';
// Contexts
import productsContext from '../../contexts/products/productsContext';
import FiltersCategoriesSeleted from './FiltersCategoriesSelected';
const FiltersCategory = ({categories}) => {

    const ProductsContext = useContext(productsContext);
    const { addFilterCategory, removeFilterCategory, filters} = ProductsContext;

    const handleCategory = (e) => {
        e.preventDefault();
        if(!filters.find(filter => filter._id === e.target.value)) {
            const category = categories.find(category => category._id === e.target.value);
            addFilterCategory(category);
        }
    }

    return (
        <div
            className="content-filters_categories"
        >
            <p className="filter-title">Filtra por categorías</p>
            <form className="">
                <select
                    defaultValue="all"
                    onChange={handleCategory}
                >
                    <option value="all" disabled>-- Categorías --</option>
                    {categories.map(category => (
                        <option
                            key={category._id}
                            value={category._id}
                        >{category.name}</option>
                    ))}
                </select>
            </form>
            <FiltersCategoriesSeleted 
                filters={filters}
                removeFilterCategory={removeFilterCategory}
            />
        </div>
    );
}

export default FiltersCategory;