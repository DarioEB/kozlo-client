import React from 'react';

const DropzoneProduct = ({getRootProps, getInputProps, isDragActive}) => {

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
                                Selecciona las imagenes y arrastralas aquí
                            </p>
                            <button
                                className="btn-drop"
                                type="button"
                            >Selecciona las imagenes del producto</button>
                        </div>
                    )
            }
        </div>
    );
}

export default DropzoneProduct;