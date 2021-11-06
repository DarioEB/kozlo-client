import React, { useEffect, Fragment, useState, useContext } from 'react';
// Contexts
import categoriesContext from '../../contexts/categories/categoriesContext';
import AddCategory from './categoriesAdminComponent/AddCategory';
import ListCategories from './categoriesAdminComponent/ListCategories';
const CategoriesAdmin = () => {

    const [component, setComponent] = useState(null);
    // CategoriesContext
    const CategoriesContext = useContext(categoriesContext);
    const { getCategories, categories, cleanForm, addCategory  } = CategoriesContext;

    useEffect( () => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <div className="content-component_buttons">
                <button 
                    className="btn"
                    onClick={() => setComponent('add-category')}
                ><span>Agregar Categoría</span><i className="fas fa-plus"></i></button>
                <button 
                    className="btn"
                    onClick={() => setComponent('list-categories')}    
                ><span>Listar Categorías</span> <i className="fas fa-tshirt"></i></button>
                <button className="btn">Buscar Categorías <i className="fas fa-search"></i></button>
            </div>
            {!component ? 
                <div className="content-component_preview">
                    <p>Selecciona una acción</p>
                </div>    
            : null
            }
            
            <div className="content-component_actions">
                {
                    component === 'add-category' && !cleanForm ? 
                    <AddCategory 
                        addCategory={addCategory}
                    /> : null
                }
                {
                    component === 'list-categories' ?
                    <ListCategories 
                        categories={categories}
                    /> : null
                }
            </div>
        </Fragment>
    );
}

export default CategoriesAdmin;