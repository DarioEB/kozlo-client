import React, { useEffect, useState } from 'react';
import {
    TitleAdmin,
    Form,
    FormLayout,
    Fieldset,
    Field,
    BtnSubmit,
    FieldTwo,
    DropzonePreview,
    PreviewImageData
} from '../../UI';
import InputTags from './InputTags';
import InputWaists from './InputWaists';
import WaistSelect from './WaistSelect';
const Edit = ({
    productEdit,
    categories,
    tags,
    updateProduct
}) => {

    const [category, setCategory] = useState(productEdit.category);   
    const [product, setProduct] = useState(productEdit);
    const [errors, setErrors] = useState({});

    useEffect( () => {
        setProduct(productEdit);
        setCategory(productEdit.category);
        // eslint-disable-next-line
    }, [productEdit]);
    
    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="content-component_actions">
            <TitleAdmin>
                <h2>{product.name}</h2>
                <p>
                    Editar los datos que deseas y guarda los cambios
                </p>
            </TitleAdmin>
            <Form
                className="form-admin"
            >
                <FormLayout>
                    <Fieldset>
                        <legend>Información del producto</legend>
                        <div className="field-admin_young">
                            <button
                                // onClick={e => handleClickYoung(e)}
                                className={product.young ? 'select-young' : ''}
                            >
                                {product.young ? (
                                    <span>Este producto se mostrará en Young</span>
                                ) :
                                    (
                                        <span>Este producto no se mostrará en Young</span>
                                    )}
                            </button>
                            {product.young ? (
                                <span>Click para no mostrar este producto en la sección de Young</span>
                            ) :
                                (
                                    <span>Click para mostrar este producto en la sección de Young</span>
                                )
                            }
                        </div>
                        <Field>
                            <label htmlFor="name">Nombre <span>(*)</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nombre del Producto"
                                onChange={handleChange}
                                // onBlur={handleBlur}
                                value={product.name}
                            />
                            {/* {errors.name ? <AlertField message={errors.name} /> : null} */}
                        </Field>
                        <Field>
                            <label htmlFor="brand">Marca <span>(*)</span></label>
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                placeholder="Marca del Producto"
                                // onChange={handleChangeProduct}
                                // onBlur={handleBlur}
                                value={product.brand}
                            />
                            {/* {errors.brand ? <AlertField message={errors.brand} /> : null} */}
                        </Field>
                        <Field>
                            <label htmlFor="category">Categoría <span>(*)</span></label>
                            <select
                                defaultValue=""
                                name="category"
                                id="category"
                                // onChange={handleChangeCategory}
                                // onBlur={handleBlur}

                            >
                                <option disabled>-- Selecciona --</option>
                                {categories.map(category => (
                                    <option
                                        key={category._id}
                                        value={category._id}
                                    >{category.name}</option>
                                ))}
                            </select>
                            {/* {errors.category ? <AlertField message={errors.category} /> : null} */}
                        </Field>
                        <FieldTwo>
                            <Field>
                                <label htmlFor="price">Precio <span>(*)</span></label>
                                <input
                                    type="number"
                                    step="any"
                                    name="price"
                                    id="price"
                                    placeholder="Precio"
                                    // onChange={handleChangeProduct}
                                    // onBlur={handleBlur}
                                    value={product.price}
                                />
                                {/* {errors.price ? <AlertField message={errors.price} /> : null} */}
                            </Field>
                            <Field>
                                <label htmlFor="discount">Descuento(%)</label>
                                <input
                                    type="number"
                                    step="any"
                                    name="discount"
                                    id="discount"
                                    min="0"
                                    placeholder="Porcentaje de Descuento"
                                    // onChange={handleChangeProduct}
                                    // onBlur={handleBlur}
                                    value={product.discount}
                                />
                                {/* {errors.discount ? <AlertField message={errors.discount} /> : null} */}
                            </Field>
                        </FieldTwo>
                            <InputTags
                                tags={tags}
                                product={product}
                                setProduct={setProduct}
                                errors={errors}
                            />
                            {
                                category
                                    ?
                                    <InputWaists
                                        category={category}
                                        product={product}
                                        setProduct={setProduct}
                                        errors={errors}
                                        // handleBlur={handleBlur}
                                        setErrors={setErrors}
                                    /> : null
                            }
                            {
                                product.waists.length > 0
                                    ? <WaistSelect
                                        product={product}
                                        setProduct={setProduct}
                                    /> : null
                            }
                    </Fieldset>
                    {/* <Fieldset>
                        <legend>Imagenes del producto</legend>
                        {
                            files.length > 0 ?
                                <DropzoneProductImages
                                    files={files}
                                    handleDeleteImages={handleDeleteImages}
                                    handleDeleteImage={handleDeleteImage}
                                    size={size}
                                    setSize={setSize}
                                /> :
                                <DropzoneProduct
                                    getInputProps={getInputProps}
                                    getRootProps={getRootProps}
                                    isDragActive={isDragActive}
                                />
                        }
                    </Fieldset> */}
                    <Fieldset>
                        <legend>Imagenes cargadas</legend>
                        <DropzonePreview>
                            <ul>
                                {product.images.map( (image, i) => (
                                    <li
                                        key={i}
                                    >
                                        <PreviewImageData>
                                            <p>Nombre: <span>{image}</span></p>
                                        </PreviewImageData>
                                        <div className="preview-image">
                                            <img 
                                                src={`${process.env.REACT_APP_BACKEND_URL}/api/products/get-image/${image}`}
                                                alt={`Imagen producto ${product.name}`}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </DropzonePreview>
                    </Fieldset>
                </FormLayout>
                <BtnSubmit>
                    <input
                        type="submit"
                        className="btn-submit"
                        value="Guardar Cambios"
                    />
                </BtnSubmit>
            </Form>
        </div>
    );
}

export default Edit;