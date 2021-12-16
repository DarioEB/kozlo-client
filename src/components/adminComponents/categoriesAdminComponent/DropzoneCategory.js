import React from 'react';
import {
    DropzoneDiv
} from '../../UI';
const DropzoneCategory = ({
    getInputProps,
    getRootProps,
    isDragActive
}) => {


    return (
        <DropzoneDiv
            {...getRootProps()}
        >
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
        </DropzoneDiv>
    );
}

export default DropzoneCategory;