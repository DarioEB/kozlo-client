import React from 'react';
import styled from '@emotion/styled';

const AlertFieldContent = styled.div`
    background-color: var(--back-red-sec);
    padding: .25rem 0;
    text-align: center;
    border-radius: .15rem;
    span {
        font-weight: 600;
        font-size: 1.3rem;
        color: var(--w);
        @media (min-width: 768px) {
            font-size: 1.4rem;
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