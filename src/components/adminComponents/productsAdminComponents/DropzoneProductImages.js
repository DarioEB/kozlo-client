import React from 'react';

const DropzoneProductImages = ({ files, handleDeleteImages, handleDeleteImage, size, setSize }) => {

    setSize(files.map(file => file.size).reduce((a, b) => a + b, 0));

    return (
        <div className="dropzone-preview">
            <ul>
                {files.map((file, i) => (
                    <li
                        key={file.lastModified}
                    >
                        <div className="preview-data">
                            <p>Nombre: <span>{file.path}</span></p>
                            <p>Tamaño: <span>{(file.size / Math.pow(1024, 2)).toFixed(3)} MB</span></p>
                            <button
                                onClick={(e) => handleDeleteImage(e, file)}
                                className="delete-image-drop">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                        <div className="preview-image">
                            <img
                                src={file.preview}
                                alt="Imagen a subir"
                            />
                        </div>
                    </li>
                ))}
            </ul><div className="delete-images-drop">
                <button
                    onClick={e => handleDeleteImages(e)}
                    className="btn">
                    Descartar imagenes
                </button>
            </div> <div className="dropzone-total-size">
                <p className="max-size">Capacidad máxima de archivos 1 MG</p>
                {(size / Math.pow(1024, 2)).toFixed(3) < 1 ?
                    <p
                        className={`${(size / Math.pow(1024, 2)).toFixed(3) > 0.750 ? 'med' : 'good'}`}
                    >Tamaño total: {(size / Math.pow(1024, 2)).toFixed(3)} MB</p>
                    :
                    <p className="alert-size">Archivos muy pesados: {(size / Math.pow(1024, 2)).toFixed(3)} MB - Optimizar imagenes </p>
                }

            </div>
        </div>
    );
}

export default DropzoneProductImages;