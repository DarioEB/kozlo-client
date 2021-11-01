import React from 'react';
import styled from '@emotion/styled';

const AlertLoginContent = styled.div`
    background-color: var(--back-red);
    text-align: center;
    padding: 1rem 0;
    border-radius: .5rem;
    span {
        font-weight: 600;
        font-size: 1.8rem;
        color: var(--w);
        @media (min-width: 768px) {
            font-size: 2rem;
        }
    }
`

const AlertLogin = ({message}) => {

    return (
        <AlertLoginContent>
            <span>
                {message}
            </span>
        </AlertLoginContent>
    );
}

export default AlertLogin;