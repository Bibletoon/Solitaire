import React from 'react';
import Card from "../../models/Card";
import CardComponent from "./CardComponent";
import styles from "./CardStackComponent.module.css"

interface CardStackProps {
    cards : Card[];
}

const CardStackComponent = ({cards} : CardStackProps) => {
    return (
        <div className={[styles.card__stack, "column"].join(" ")}>
            {
                cards.map(c =>
                        <CardComponent card={c}/>
                    )
            }
        </div>
    );
};

export default CardStackComponent;