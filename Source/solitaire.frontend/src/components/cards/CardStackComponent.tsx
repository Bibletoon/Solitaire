import React from 'react';
import Card from "../../models/Card";
import CardComponent from "./CardComponent";
import styles from "./CardStackComponent.module.css"
import EmptyCardComponent from "./EmptyCardComponent";
import CardStack from "../../models/CardStack";

interface CardStackProps {
    cards : CardStack;
}

const CardStackComponent = ({cards} : CardStackProps) => {
    return (
        <div className={[styles.card__stack, "column"].join(" ")}>
            {
                cards.hidden.map(c =>
                        <CardComponent card={c} hidden={true} />
                    )
            }
            {
                cards.shown.map(c =>
                    <CardComponent card={c} hidden={false} />
                )
            }
            {cards.hidden.length + cards.shown.length === 0 && <EmptyCardComponent/> }
        </div>
    );
};

export default CardStackComponent;