import React from 'react';
import styled from '@emotion/styled';

const AlertFieldContent = styled.div`
    /* background-color: var(--back-red-sec); */
    padding: 1rem 0;
    border-left: .35rem solid var(--back-red);
    text-align: left;
    border-radius: .15rem;
    span {
        padding-left: 2rem;
        font-weight: 600;
        font-size: 1.4rem;
        color: var(--back-red);
        @media (min-width: 768px) {
            font-size: 1.6rem;
        }
    }
`

const AlertField = ({message}) => {
 
    return (
        <AlertFieldContent>
            <span>{message}</span>
        </AlertFieldContent>
    )
}

export default AlertField;