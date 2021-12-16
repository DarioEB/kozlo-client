import React,{useCallback, useState} from 'react';
import InputWaists from './InputWaists';
import { useDropzone } from 'react-dropzone';
import DropzoneCategory from './DropzoneCategory';
import WaistsSelect from './WaistsSelect';
import AlertField from '../../alertComponents/AlertField';
import DropzoneCategoryImages from './DropzoneCategoryImages';

import {
    TitleAdmin,
    Form,
    FormLayout,
    Fieldset,
    Field,
    BtnSubmit
} from '../../UI';

function validation(values) {
    let errors = {}

    if(values.name === '') {
        errors.name = 'El campo nombre es obligatorio';
    }
    if(values.waists.length === 0) {
        errors.waists = 'Debe ingresar al menos un talle para la categoría'
    }
    if(values.image === '') {
        errors.image = 'La categoría debe tener una imagen';
    }

    return errors;
}

const AddCategory = ({
    addCategory
}) => {

    // State de categoría
    const [category, setCategory] = useState({
        name: '',
        waists: [],
        image: ''
    });
    // TAMAÑO DE ARCHIVOS
    const [size, setSize] = useState(null);
    // File
    const [file, setFile] = useState([]);
    // State para errors 
    const [errors, setErrors] = useState({});

    const onDropAccepted = useCallback(async (acceptedFiles) => {
        setCategory({
            ...category,
            image: acceptedFiles[0].path
        });
        setSize(acceptedFiles[0].size);

        setFile(acceptedFiles.map(file => (
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        )))
    }, [category, setCategory, setSize, setFile]);

    // Evento change
    const handleChangeCategory = e => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    }

    // Evento para eliminar imagenes
    const handleDeleteImage = e => {
        e.preventDefault();
        setFile([]);
        setCategory({
            ...category,
            image: ''
        });
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
        maxFiles: 1,
        maxSize: (1024 * 1024),
        accept: 'image/jpeg',
    });

    const handleSubmit = e => {
        e.preventDefault();

        let getErrors = validation(category);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;
        if(noErrors) {
            const f = new FormData();
            f.append('name', category.name);
            category.waists.forEach( waist => {
                f.append('waists[]', waist);
            });
            f.append('image', category.image);
            f.append('file', file[0]);
            addCategory(f);
        } 
    }

    return (
        <div>
            <TitleAdmin>
                <h2>Nueva categoría</h2>
                <p>Completa los campos para añadir la categoría que deseas</p>
            </TitleAdmin>
            <Form 
                onSubmit={handleSubmit}
                className="form-admin"
            >
                <FormLayout>
                    <Fieldset>
                        <legend>Información de categoría</legend>
                        <Field>
                            <label htmlFor="name">Nombre (*)</label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nombre de categoría"
                                onChange={handleChangeCategory}
                                onBlur={handleBlur}
                                value={category.name}
                            />
                            {errors.name ? <AlertField message={errors.name} /> : null}
                        </Field>
                        <InputWaists 
                            category={category}
                            setCategory={setCategory}
                            errors={errors}
                            handleBlur={handleBlur}
                            setErrors={setErrors}
                        />
                        {
                            category.waists.length > 0
                            ?
                            <WaistsSelect 
                                category={category}
                                setCategory={setCategory}
                            /> : null
                        }
                    </Fieldset>
                    <Fieldset>
                        <legend>Imagen de Categoría</legend>
                        {
                            file.length > 0 ?
                            <DropzoneCategoryImages 
                                file={file}
                                handleDeleteImage={handleDeleteImage}
                                size={size}
                                setSize={setSize}
                            /> : 
                            <DropzoneCategory 
                                getInputProps={getInputProps}
                                getRootProps={getRootProps}
                                isDragActive={isDragActive}
                            />
                        }
                        {errors.images ? <AlertField message={errors.image} /> : null}
                    </Fieldset>
                    
                </FormLayout>
                <BtnSubmit>
                    <input 
                        type="submit"
                        className='btn-submit'
                        value="Agregar"
                    />
                </BtnSubmit>
            </Form>
        </div>
    );
}

export default AddCategory;