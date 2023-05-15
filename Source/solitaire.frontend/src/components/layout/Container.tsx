import React, {FC, ReactNode} from 'react';
import styles from "./Container.module.css"
import styled from "styled-components";

const ContainerBlock = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding: 20px calc(50% - 187px) 0;
    
    @media (min-width: 635px) {
        flex-direction: column-reverse;
        padding: 20px calc(50% - 310px) 0;
    }
    
    @media (min-width:880px) {
        flex-direction: row;
        padding: 20px max(calc(50% - 500px), 40px) 0;
    }
    
    @media (min-width:1300px) {
        flex-direction: row;
        padding: 20px max(calc(50% - 680px), 40px) 0;
    }
`;

interface ContainerProps {
    children : ReactNode
}

const Container : FC<ContainerProps> = ({children} : ContainerProps) => {
    return (
        <ContainerBlock>
            {children}
        </ContainerBlock>
    );
};

export default Container;