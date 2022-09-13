import React, {useState} from 'react';
import styles from './CardComponent.module.css';
import Card from "../../models/Card";


interface CardComponentProps {
    card : Card
}

const CardComponent = ({card} : CardComponentProps) => {
    return (
        <div draggable={true} className={styles.card}>{card.toChar()}</div>
    );
};

export default CardComponent;