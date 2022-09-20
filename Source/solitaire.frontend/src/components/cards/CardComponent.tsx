import React, {FC} from 'react';
import styles from './CardComponent.module.css';
import Card from "../../models/Card";
import Suit from "../../models/Suit";
import {useDrag} from "react-dnd";


type CardComponentProps = {
    card : Card
    hidden? : Boolean
    className? : string
    coordinates? : {
        x : number,
        y : number
    }
}

const CardComponent : FC<CardComponentProps> = ({card, className, hidden, coordinates} : CardComponentProps) => {
    const color = hidden ? styles.red : card.suit === Suit.Heart || card.suit === Suit.Diamond ? styles.red : styles.black;

        const [_, drag] = useDrag(() => ({
            type: "card",
            item : (monitor) => ({
                x : coordinates?.x,
                y : coordinates?.y
            }),
            canDrag : () => !hidden
        }), [])


    return (
        <div ref={drag} draggable={!hidden} className={[styles.card, color, className].join(" ")}>{hidden ? '\u{1F0A0}' : card.toChar()}</div>
    );
};

CardComponent.defaultProps = {
    hidden : false,
    className : "",
    coordinates : undefined
};

export default CardComponent;