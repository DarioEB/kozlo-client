import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import AlertField from '../../alertComponents/AlertField';
import WaistSelect from './WaistSelect';
import InputWaists from './InputWaists';
import DropzoneProduct from './DropzoneProduct';
import InputTags from './InputTags';
import DropzoneProductImages from './DropzoneProductImages';
function validation(values) {
    let errors = {};

    if(values.name === '') {
        errors.name = 'El nombre del producto es obligatorio';
    } else if(values.name.length < 6) {
        errors.name = 'Ingrese un nombre más descriptivo';
    }

    if(values.brand === '') {
        errors.brand = 'La marca del producto es obligatoria';
    } 
    if(values.category === '') {
        errors.category = 'Debe seleccionar una categoría para el producto';
    }
    if(values.price === '') {
        errors.price = 'El precio del producto es obligatorio';
    }
    if(values.tags.length === 0) {
        errors.tags = 'Debe asignarle al menos un Tag al producto';
    }
    if(values.waists.length === 0) {
        errors.waists = 'El producto debe tener al menos un talle seleccionado';
    }
    if(values.images.length === 0) {
        errors.images = 'El producto debe tener al menos una imagen';
    }

    return errors;
}

const AddProduct = ({ 
    categories, 
    tags,
    addProduct }) => {

    // State de categoría seleccionada
    const [category, setCategory] = useState(null);
    // State de product
    const [product, setProduct] = useState({
        name: '',
        brand: '',
        category: '',
        price: '',
        discount: '',
        tags: [],
        waists: [],
        images: [],
        young: false
    });
    // Tamaño de archivos
    const [size, setSize] = useState(null);
    // File
    const [files, setFiles] = useState([]);
    // State para errors
    const [errors, setErrors] = useState({});

    const onDropAccepted = useCallback(async (acceptedFiles) => {
        setProduct({
            ...product,
            images: acceptedFiles.map(file => file.path)
        });
        setSize(
            acceptedFiles.map(file => file.size).reduce((a, b) => a + b, 0)
        );

        setFiles(
            acceptedFiles.map(file => (
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )));
    }, [product, setProduct, setSize, setFiles])

    const onDropRejected = () => {

    }

    // Extraer contenido de Dropzone
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        // eslint-disable-next-line
        acceptedFiles
    } = useDropzone({
        onDropAccepted,
        onDropRejected,
        maxFiles: 4,
        maxSize: (1024 * 1024),
        accept: 'image/jpeg',
    });

    const handleChangeProduct = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeCategory = (e) => {
        const c = categories.find(category => category._id === e.target.value);
        setCategory(c);
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }


    const handleDeleteImages = (e) => {
        e.preventDefault();
        setFiles([]);
        setProduct({
            ...product,
            images: []
        });
    }

    const handleDeleteImage = (e, image) => {
        e.preventDefault();
        setFiles(files.filter(file => file.path !== image.path));
        setProduct({
            ...product,
            images: product.images.filter(img => img !== image.path)
        });
    }

    const handleClickYoung = (e) => {
        e.preventDefault();
        setProduct({
            ...product,
            young: !product.young
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let getErrors = validation(product);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;
        if(noErrors) {
            const f = new FormData();
            f.append('name', product.name);
            f.append('brand', product.brand);
            f.append('category', product.category);
            f.append('price', product.price);
            f.append('discount', product.discount);
            product.tags.forEach( tag => {
                f.append('tags[]', tag)
            });
            product.waists.forEach(w => {
                f.append('waists[]', w.waist);
                f.append('stock[]', w.stock);
            });
            f.append('images', product.images);
            files.forEach(file => {
                f.append('file[]', file);
            });
            f.append('young', product.young);
            addProduct(f);
            
        } 
    }

    const handleBlur = (e) => {
        if(e.target.value.length === 0) {
            setErrors({
                ...errors,
                [e.target.name]: `El campo ${e.target.name} no puede ir vacío`
            })
        } else {
            setErrors({
                ...errors,
                [e.target.name]: null
            })
        }
    }

    

    return (
        <form 
            className="form-admin"
            onSubmit={handleSubmit}    
        >
            <div className="form-add-product">
                <fieldset>
                    <legend>Información del producto</legend>
                    <div className="field-admin_young">
                        <button
                            onClick={e => handleClickYoung(e)}
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
                    <div className="field-admin">
                        <label htmlFor="name">Nombre <span>(*)</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre del Producto"
                            onChange={handleChangeCategory}
                            onBlur={handleBlur}
                            value={product.name}
                        />
                        {errors.name ? <AlertField message={errors.name} /> : null}
                    </div>
                    <div className="field-admin">
                        <label htmlFor="brand">Marca <span>(*)</span></label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            placeholder="Marca del Producto"
                            onChange={handleChangeProduct}
                            onBlur={handleBlur}
                            value={product.brand}
                        />
                        {errors.brand ? <AlertField message={errors.brand} /> : null}
                    </div>
                    <div className="field-admin">
                        <label htmlFor="category">Categoría <span>(*)</span></label>
                        <select
                            defaultValue=""
                            name="category"
                            id="category"
                            onChange={handleChangeCategory}
                            onBlur={handleBlur}

                        >
                            <option disabled>-- Selecciona --</option>
                            {categories.map(category => (
                                <option
                                    key={category._id}
                                    value={category._id}
                                >{category.name}</option>
                            ))}
                        </select>
                        {errors.category ? <AlertField message={errors.category} /> : null}
                    </div>
                    <div className="field-admin_tw">
                        <div className="field-admin">
                            <label htmlFor="price">Precio <span>(*)</span></label>
                            <input
                                type="number"
                                step="any"
                                name="price"
                                id="price"
                                placeholder="Precio"
                                onChange={handleChangeProduct}
                                onBlur={handleBlur}
                                value={product.price}
                            />
                            {errors.price ? <AlertField message={errors.price} /> : null}
                        </div>
                        <div className="field-admin">
                            <label htmlFor="discount">Descuento(%)</label>
                            <input
                                type="number"
                                step="any"
                                name="discount"
                                id="discount"
                                min="0"
                                placeholder="Porcentaje de Descuento"
                                onChange={handleChangeProduct}
                                onBlur={handleBlur}
                                value={product.discount}
                            />
                            {errors.discount ? <AlertField message={errors.discount} /> : null}
                        </div>
                    </div>
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
                                handleBlur={handleBlur}
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
                </fieldset>
                <fieldset>
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
                </fieldset>
            </div>

            <div className="form-admin_submit">
                <input
                    type="submit"
                    className="btn"
                    value="Agregar"
                />
            </div>
        </form>
    );
}

export default AddProduct;