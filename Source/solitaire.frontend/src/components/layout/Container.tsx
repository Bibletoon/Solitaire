import React, {FC, ReactNode} from 'react';
import styles from "./Container.module.css"

interface ContainerProps {
    children : ReactNode
}

const Container : FC<ContainerProps> = ({children} : ContainerProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;