import React from 'react';
import styles from './CardComponent.module.css';

const CardComponent = () => {
    return (
        <div className={styles.card} draggable="true"></div>
    );
};

export default CardComponent;