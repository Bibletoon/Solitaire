import React from 'react';
import styles from './CardComponent.module.css';
import Card from "../../models/Card";
import Suit from "../../models/Suit";


interface CardComponentProps {
    card : Card
}

const CardComponent = ({card} : CardComponentProps) => {
    const color = card.suit == Suit.Heart || card.suit == Suit.Diamond ? styles.red : styles.black;
    return (
        <div draggable={true} className={[styles.card, color].join(" ")}>{card.toChar()}</div>
    );
};

export default CardComponent;