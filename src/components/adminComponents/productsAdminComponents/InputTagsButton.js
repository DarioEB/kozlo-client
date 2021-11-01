import React, { useState } from 'react';

const InputTagsButton = ({ tag, product, setProduct }) => {

    const [select, setSelect] = useState(false);

    const handleClickTagButton = (e) => {
        e.preventDefault();
        if(select) {
            setSelect(false);
            setProduct({
                ...product,
                tags: product.tags.filter(t => t !== tag.name )
            });
        } else {
            setSelect(true);
            setProduct({
                ...product,
                tags: [...product.tags, tag.name]
            });
        }
    }

    return (
        <button
            key={tag._id}
            className={`btn-tag-admin ${select ? 'select' : ''}`}
            onClick={(e) => handleClickTagButton(e)}
        >
            <span>
                {tag.name}
            </span>
            <i className="fas fa-check"></i>
        </button>
    );
}

export default InputTagsButton;