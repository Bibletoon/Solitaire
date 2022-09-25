import React, {FC} from 'react';
import styles from './CardComponent.module.css';
import Card from "../../models/Card";
import Suit from "../../models/Suit";
import {useDrag} from "react-dnd";
import CardPosition from "../../models/CardPosition";


type CardComponentProps = {
    card : Card
    canDrag? : boolean
    hidden? : boolean
    className? : string
    position : CardPosition
}

const CardComponent : FC<CardComponentProps> = ({card, className, hidden, position, canDrag} : CardComponentProps) => {
    const color = hidden ? styles.red : card.suit === Suit.Heart || card.suit === Suit.Diamond ? styles.red : styles.black;

    const [_, drag] = useDrag(() => ({
        type: "card",
        item : (monitor) => position,
        canDrag : () => canDrag ?? true,
    }), [])

    return (
        <div ref={drag} draggable={!hidden} className={[styles.card, color, className].join(" ")}>{hidden ? '\u{1F0A0}' : card.toChar()}</div>
    );
};

CardComponent.defaultProps = {
    hidden : false,
    canDrag : true,
    className : "",
    position : undefined
};

export default CardComponent;