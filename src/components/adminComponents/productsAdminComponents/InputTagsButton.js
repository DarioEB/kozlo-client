import React, { useState } from 'react';
import styled from '@emotion/styled';

const ButtonTag = styled.button`
    padding: 1rem 0;
    font-size: 1.2rem;
    color: var(--w);
    background-color: var(--g);
    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
    font-weight: 400;
    letter-spacing: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    gap: .4rem;
    &.select {
        background-color: var(--b);
        color: var(--d);
    }
`

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
        <ButtonTag
            key={tag._id}
            className={`btn-tag-admin ${select ? 'select' : ''}`}
            onClick={(e) => handleClickTagButton(e)}
        >
            <span>
                {tag.name}
            </span>
            <i className="fas fa-check"></i>
        </ButtonTag>
    );
}

export default InputTagsButton;