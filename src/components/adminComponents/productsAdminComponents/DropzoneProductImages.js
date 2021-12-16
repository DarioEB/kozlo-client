import React from 'react';
import {
    DropzonePreview,
    PreviewImageData
} from '../../UI';
import styled from '@emotion/styled';
import {
    TrashIcon
} from '@heroicons/react/outline';



const DiscartImage = styled.button`
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--back-red-sec);
    border-radius: 50%;
    cursor: pointer;
    border: .1rem solid var(--back-red-sec);
    .icon {
        font-size: 2rem;
        color: var(--w);
        width: 2.8rem;
        height: 2.8rem;
    }
    @media (min-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
        .icon {
            width: 3rem;
            height: 3rem;
        }
    }
`

const DeleteImageDrop = styled.div`
    display: block;
    width: 100%;
    text-align: left;
    margin: 1rem 0;
    button {
        box-shadow: 0 .25rem .25rem .1rem var(--back-red-sec);
        padding: 1.5rem 3rem;
        border-radius: .25rem;
        background-color: var(--back-red);
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--w);
        cursor: pointer;
        text-transform: uppercase;
    }
`

const ImageDropSize = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: .2rem;
    p {
        font-size: 1.2rem;
        color: var(--g);
        margin: 0;padding: 0;
        font-weight: 600;
        span {
            color: var(--b);
        }
    }
    @media (min-width: 768px) {
        p {
            font-size: 1.4rem;
        }
    }
`

const DropzoneProductImages = ({ files, handleDeleteImages, handleDeleteImage, size, setSize }) => {

    setSize(files.map(file => file.size).reduce((a, b) => a + b, 0));

    return (
        <DropzonePreview>
            <ul>
                {files.map((file, i) => (
                    <li
                        key={file.lastModified}
                    >
                        <PreviewImageData>
                            <p>Nombre: <span>{file.path}</span></p>
                            <p>Tamaño: <span>{(file.size / Math.pow(1024, 2)).toFixed(3)} MB</span></p>
                            <DiscartImage
                                onClick={(e) => handleDeleteImage(e, file)}
                                className="delete-image-drop"
                            >
                                <TrashIcon 
                                    className="icon"
                                />
                            </DiscartImage>
                        </PreviewImageData>
                        <div className="preview-image">
                            <img
                                src={file.preview}
                                alt="Imagen a subir"
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <DeleteImageDrop>
                <button
                    onClick={e => handleDeleteImages(e)}
                >
                    Descartar imagenes
                </button>
            </DeleteImageDrop> 
            <ImageDropSize>
                <p className="max-size">
                    Capacidad máxima de archivos 1 MG
                </p>
                {(size / Math.pow(1024, 2)).toFixed(3) < 1 ?
                    <p
                        className={`${(size / Math.pow(1024, 2)).toFixed(3) > 0.750 ? 'med' : 'good'}`}
                    >Tamaño total: {(size / Math.pow(1024, 2)).toFixed(3)} MB</p>
                    : 
                    <p className="alert-size">
                        Archivos muy pesados: {(size / Math.pow(1024, 2)).toFixed(3)} MB - Optimizar imagenes 
                    </p>
                }
            </ImageDropSize>
        </DropzonePreview>
    );
}

export default DropzoneProductImages;