import React from 'react';
import {
    DropzoneDiv 
} from '../../UI';
const DropzoneProduct = ({getRootProps, getInputProps, isDragActive}) => {

    return (
        <DropzoneDiv
            {...getRootProps()}>
            <input
                className="h-100"
                {...getInputProps()}
            />
            {
                isDragActive ?
                    (
                        <p>
                            Suelta el archivo
                        </p>
                    ) :
                    (
                        <div className="">
                            <p>
                                Selecciona las imagenes y arrastralas aquí
                            </p>
                            <button
                                type="button"
                            >Selecciona las imagenes del producto</button>
                        </div>
                    )
            }
        </DropzoneDiv>
    );
}

export default DropzoneProduct;