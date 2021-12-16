import React from 'react';
import AlertField from '../../alertComponents/AlertField';
import InputTagsButton from './InputTagsButton';
import { Field } from '../../UI';
import styled from '@emotion/styled';

const Tags = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .4rem;
    @media (min-width: 768px) {
        gap: .6rem;
    }
`

const InputTags = ({tags, product, setProduct, errors}) => {

    return (
        <Field>
            <label htmlFor="tag">Tag <span>(*)</span></label>
            <Tags>
                {tags.map(tag => (
                    <InputTagsButton 
                        key={tag._id}
                        tag={tag}
                        product={product}
                        setProduct={setProduct}
                    />
                ))}
            </Tags>
            {errors.tags ? <AlertField message={errors.tags} /> : null}
        </Field>
    );
}

export default InputTags;