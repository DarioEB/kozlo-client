import React from 'react';
import styled from '@emotion/styled';

const BarContainer = styled.div`
    position: static;
    background-color: var(--w);
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    box-shadow: 0 .25rem .5rem var(--wll);
    @media (min-width: 768px) {
        position: fixed;
        top: 0%;
        left: 0%;
        padding: 1.5rem 1rem;
        width: calc(100% - 20rem);
        left: 20rem;
        border-bottom: .1rem solid var(--wl);
    }
`

const BarContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
`

const InfoSession = styled.div` 
    p {
        padding: 0;margin: 0;
        font-size: 1.4rem;
        font-weight: 400; 
        span {
            font-weight: 700;
        }
    }

    @media (min-width: 768px) {
        p {
            font-size: 1.6rem;
        }
    }
`

const ButtonLogout = styled.div`
    button {
        margin: 0;
        padding: 1.5rem 3rem;
        background-color: var(--g);
        font-size: 1.4rem;
        color: var(--w);
        border-radius: 1rem;
        transition: all .33s ease-out;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        &:hover {
            /* background-color: var(--gl); */
        }
    }
    @media (min-width: 768px) {
        button {
            color: var(--w);
            font-size: 1.6rem;
        }
    }
`

const Bar = ({logout, user}) => {


    return (
        <BarContainer>
            <BarContent>
                <InfoSession>
                    <p>
                        Sesión <span>{user.name}</span>  
                    </p>
                </InfoSession>
                <ButtonLogout>
                    <button
                        onClick={() => logout()}
                    >
                        Cerrar Sesión
                    </button>
                </ButtonLogout>
            </BarContent>
        </BarContainer>
    );
}

export default Bar;