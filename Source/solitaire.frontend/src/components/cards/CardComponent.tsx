import React, {FC} from 'react';
import styles from './CardComponent.module.css';
import Card from "../../models/Card";
import Suit from "../../models/Suit";


type CardComponentProps = {
    card : Card
    hidden : Boolean
}

const CardComponent : FC<CardComponentProps> = ({card, hidden = false} : CardComponentProps) => {
    const color = card.suit === Suit.Heart || card.suit === Suit.Diamond ? styles.red : styles.black;
    return (
        <div draggable={true} className={[styles.card, color].join(" ")}>{hidden ? '\u{1F0A0}' : card.toChar()}</div>
    );
};

export default CardComponent;