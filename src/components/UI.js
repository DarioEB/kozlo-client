import styled from '@emotion/styled';


export const ButtonsAction = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
    margin-top: 2rem;
    @media (min-width: 768px) {
        width: 75%;
        margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        margin-top: 10rem;
    }

`

export const BtnAction = styled.div`   
    .btn-action {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        align-items: center;
        padding: 1.2rem 0;
        background-color: var(--g);
        border-radius: 5rem;
        cursor: pointer;
        transition: all .33s ease-out;
        &.active, &:hover {
            background-color: var(--b);
            span, .icon {
                color: var(--d);
            }
        }
        span, .icon {
            color: var(--w);
            font-size: 1.6rem;
        }
        .icon {
            width: 2rem;
            height: 2rem;
        }
        @media (min-width: 768px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: 2rem 0;
            .icon {
                width: 2.8rem;
                height: 2.8rem;
            }
            span {
                font-size: 1.8rem;
            }
        }
    }
`

export const Filters = styled.div`
    display: grid;
    margin: 2rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
    @media (min-width: 768px) {
        width: 75%;
        margin: 2rem auto;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
    align-items: baseline;

    .select, input {
        font-size: 1.2rem;
        text-transform: uppercase;
        padding: 1.5rem 0;
        border-radius: 1rem;
        text-align: center;
        color: var(--d);
        background-color: var(--g);
        outline: none;
    }
    input {
        color: var(--w);
        text-transform: none;

    }
    button {
        font-size: 1.2rem;
        padding: 1.6rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        justify-content: center;
        background-color: var(--g);
        border-radius: 1rem;
        color: var(--d);
        text-transform: uppercase;
        cursor: pointer;
    }
    @media (min-width: 768px) {
        .select,input {
            font-size: 1.4rem;
        }
        button {
            font-size: 1.4rem;
        }
    }
`

export const TitleAdmin = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2, p {
        text-align: center;
        margin: 0; padding: 0;
    } 
    h2 {
        font-weight: 700;
        font-size: 2.8rem;
        font-weight: 600;
        color: var(--b);
        text-transform: uppercase;
    }
    p {
        font-size: 1.2rem;
    }

    @media (min-width: 768px) {
        gao: 1.4rem;
        h2 {
            font-size: 3.4rem;
        }
        p {
            font-size: 1.4rem;
        }
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
`

export const FormLayout = styled.div`
    display: grid;
    gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 2rem 1rem;
    }
    align-items: baseline;
    padding: 1rem;
`

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    border: none;
    padding: 1rem;
    box-shadow: 0 .5rem .5rem .5rem var(--wl);
    border-radius: 1rem;
    legend {
        font-size: 1.4rem;
        letter-spacing: 1px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
    }
    @meida (min-width: 768px) {
        padding: 2rem;
        gap: 1rem;
    }
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;
    justify-content: flex-end;
    label {
        font-size: 1.4rem;
    }
    input, select {
        width: 100%;
        background-color: var(--w);
        color: var(--b);
        font-size: 1.6rem;
        padding: 1rem;
        height: 4rem;
        outline: none;
        border: .1rem solid var(--g);
        border-radius: .1rem;
    }
    @media (min-width: 768px) {
        /* gap: .4rem; */
        label {
            font-size: 1.5rem;
        }
        input, select {
            font-size: 1.7rem;
            padding: 1.2rem;
            height: 5rem;
        }
    }
`

export const WaistsContent = styled.div`

    ul {
        display: flex;
        flex-direction: column;
        gap: .8rem;
        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

            .waist, .stock {
                flex: 1;
                p {
                    margin: 0;
                    text-align: left;
                    border: .1rem solid var(--g);
                    padding: 1.5rem;
                    font-size: 1.4rem;
                    border-radius: .1rem;

                    @media (min-width: 768px) {
                        font-size: 1.6rem;
                    }
                }
            }
            .btn-delete {
                width: 5rem;
                height: 5rem;
                background-color: var(--red);
                border-radius: 50%;
                cursor: pointer;
                .icon {
                    color: var(--w);
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
    }
`

export const FieldTwo = styled.div`
    display: grid;
    gap: 0;
    align-items: baseline;
    gap: .8rem;
    @media (min-width: 768px) {
        gap: .5rem;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const FieldWaist = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: flex-end;
    .field-waist {
        flex: 1;
    }
    button {
        width: 5rem;
        height: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--g);
        border: .1rem solid var(--b);
        color: var(--w);
        border-radius: 50%;
        .icon {
            width: 4rem;
            height: 4rem;
        }
        &:hover {
            background-color: var(--b);
        }
    }   
`

export const DropzoneDiv = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #444444;
    border-radius: 1rem;
    background-image: linear-gradient(63deg, #444444 0%, #afadb1 100%);
    p {
        text-align: center;
        line-height: 1.5;
        font-size: 1.4rem;
        color :var(--w);
        text-transform: uppercase;
    }
    button {
        background-color: var(--g);
        color: var(--w);
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 600;
        padding: 2rem;
        border-radius: .1rem;
    }
    @media (min-width: 768px) {
        height: 20rem;
        button {
            font-size: 1.6rem;
        }
    }
`

export const DropzonePreview = styled.div`
    /* padding: 1rem; */
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            border-radius: .25rem;
            gap: .5rem;
            background-color: #444444;
            border-radius: 1rem;
            background-image: linear-gradient(63deg, #444444 0%, #afadb1 100%);
        }
    }
`

export const PreviewImageData = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    p {
        padding: 0;margin: 0;
        font-size: 1.2rem;
        color: var(--wll);
        span {
            color: var(--w);
        }
    }

    @media (min-width: 768px) {
        p  {
            font-size: 1.4rem;
        }
    }
`


export const BtnSubmit = styled.div`
    text-align: right;
    padding: 1rem;   
    .btn-submit {
        font-size: 1.4rem;
        cursor: pointer;
        color: var(--w);
        background-color: var(--g);
        padding: 1.4rem 3.6rem;
        width: 100%;
        border-radius: 1rem;
        border: none;
        text-transform: uppercase;
        box-shadow: 0 .5rem .5rem .25rem var(--b);
    }

    @media (min-width: 768px) {
        .btn-submit {
            width: auto;
            font-size: 1.6rem;
        }
    }
`

/** List Elementts **/
export const ContentElements = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin: 4rem auto 0 auto;
    @media (min-width: 768px) {
        width: 75%;
    }
    padding: 1rem;
`

export const ContentElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 .5rem .25rem var(--wl);
    border-radius: 1rem;
`

export const Element = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

export const ElementDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

export const ElementImage = styled.div`
    width: 8rem;
    @media (min-width: 768px) {
        width: 12rem;
    }
`

export const ElementInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
        margin:0;padding: 0;
        font-size: 1.4rem;
        font-weight: 400;
        span {
            font-weight: 600;
            text-transform: uppercase;
        }
    }
    &.prices {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        p {
        margin:0;padding: 0;
            text-align: right;
            font-size: 1.6rem;
        }
    }
    @media (min-width: 768px) {
        p {
            font-size: 1.6rem;
        }
        &.prices {
            p {
                font-size: 1.8rem;
            }
        }
    }
`

export const ElementButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .btn-details, .btn-delete {
        padding: 1rem 3rem;
        font-size: 1.4rem;
        cursor: pointer;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: .5rem;
        box-shadow: 0 .5rem .5rem var(--b);
    }
    .btn-delete {
        color: var(--d);
        background-color: var(--b);
    }
    .btn-details {
        color: var(--d);
        background-color: var(--g);
    }
`