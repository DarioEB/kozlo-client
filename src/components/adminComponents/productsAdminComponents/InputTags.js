import React from 'react';
import AlertField from '../../alertComponents/AlertField';
import InputTagsButton from './InputTagsButton';

const InputTags = ({tags, product, setProduct, errors}) => {

    return (
        <div className="field-admin">
            <label htmlFor="tag">Tag <span>(*)</span></label>
            <div className="field-admin-tag-buttons">
                {tags.map(tag => (
                    <InputTagsButton 
                        key={tag._id}
                        tag={tag}
                        product={product}
                        setProduct={setProduct}
                    />
                ))}
            </div>
            {errors.tags ? <AlertField message={errors.tags} /> : null}
        </div>
    );
}

export default InputTags;