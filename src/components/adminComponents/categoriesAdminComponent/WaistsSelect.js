import React from 'react';

const WaistsSelect = ({category, setCategory}) => {

    const handleClickDeleteWaist = (e, waist) => {
        e.preventDefault();
        setCategory({
            ...category,
            waists: category.waists.filter(w => w !== waist)
        });
    }

    return (
        <div className="content-waist-select-category">
            <ul>
                {category.waists.map( (waist, i) => (
                    <li
                        key={i}
                    >
                        <div className="content-waist-select_name">
                            <p>{waist}</p>
                        </div>
                        <div className="content-waist-select_btn">
                            <button
                                onClick={(e) => handleClickDeleteWaist(e, waist)}
                            >Eliminar Talle</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WaistsSelect;