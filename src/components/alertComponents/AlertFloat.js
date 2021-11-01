import React from 'react';
import styled from '@emotion/styled';

const AlertFloatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0%;
    top: 4rem;
    width: 100%;
    @media (min-width: 1140px) {
        right: calc(calc(100% - 1140px) / 2);
        width :auto;
    }

    p {
        width: 100%;
        text-align: center;
        background-color: var(--b);
        color: var(--d);
        font-size: 1.6rem;
        border: .1rem solid var(--d);
        border-radius: 1rem;
        padding: 1rem 1rem;
    }
`

const AlertFloat = ({message}) => {

    return (
        <AlertFloatContainer>
            <p>{message}</p>
        </AlertFloatContainer>
    );
}

export default AlertFloat;