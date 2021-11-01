import React from 'react';

const DropzoneCategory = ({
    getInputProps,
    getRootProps,
    isDragActive
}) => {


    return (
        <div
            {...getRootProps({ className: 'dropzone' })}>
            <input
                className="h-100"
                {...getInputProps()}
            />
            {
                isDragActive ?
                    (
                        <p className="text-drop">
                            Suelta el archivo
                        </p>
                    ) :
                    (
                        <div className="box-btn-drop">
                            <p className="text-drop">
                                Selecciona la imagen y arrastrala aquí
                            </p>
                            <button
                                className="btn-drop"
                                type="button"
                            >Selecciona la imagen de la categoría</button>
                        </div>
                    )
            }
        </div>
    );
}

export default DropzoneCategory;