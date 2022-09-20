import React, {FC} from 'react';
import styles from './CardComponent.module.css';
import Card from "../../models/Card";
import Suit from "../../models/Suit";


type CardComponentProps = {
    card : Card
    hidden? : Boolean
    className? : string
}

const CardComponent : FC<CardComponentProps> = ({card, className, hidden} : CardComponentProps) => {
    const color = hidden ? styles.red : card.suit === Suit.Heart || card.suit === Suit.Diamond ? styles.red : styles.black;
    return (
        <div draggable={!hidden} className={[styles.card, color, className].join(" ")}>{hidden ? '\u{1F0A0}' : card.toChar()}</div>
    );
};

CardComponent.defaultProps = {
    hidden : false,
    className : ""
};

export default CardComponent;