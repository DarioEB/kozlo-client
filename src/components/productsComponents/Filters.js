import React from 'react';
import FiltersCategory from './FiltersCategories';
import FiltersPrices from './FiltersPrices';
import FiltersSearch from './FiltersSearch';
const Filters = ({categories}) => {


    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <div className="content-filters">
                        <FiltersCategory 
                            categories={categories}
                        />
                        <FiltersPrices />
                        <FiltersSearch />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Filters;