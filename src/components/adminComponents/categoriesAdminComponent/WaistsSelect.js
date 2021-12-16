import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import {
    WaistsContent
} from '../../UI';
const WaistsSelect = ({category, setCategory}) => {

    const handleClickDeleteWaist = (e, waist) => {
        e.preventDefault();
        setCategory({
            ...category,
            waists: category.waists.filter(w => w !== waist)
        });
    }

    return (
        <WaistsContent>
            <ul>
                {category.waists.map( (waist, i) => (
                    <li
                        key={i}
                    >
                        <div className="waist">
                            <p>{waist}</p>
                        </div>
                        <button
                            onClick={(e) => handleClickDeleteWaist(e, waist)}
                            className="btn-delete"
                        >
                            <TrashIcon 
                                className="icon"
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </WaistsContent>
    );
}

export default WaistsSelect;