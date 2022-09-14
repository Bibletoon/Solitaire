import React from 'react';
import styles from './CardComponent.module.css'

const EmptyCardComponent = () => {
    return (
        <div className={styles.card} style={{color: "black", opacity: 0.3}}>
            <span>
                {"\u{1F0DF}"}
            </span>
        </div>
    );
};

export default EmptyCardComponent;