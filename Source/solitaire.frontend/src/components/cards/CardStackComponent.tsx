import React from 'react';
import CardComponent from "./CardComponent";
import styles from "./CardStackComponent.module.css"
import EmptyCardComponent from "./EmptyCardComponent";
import CardStack from "../../models/CardStack";
import {useDrop} from "react-dnd";

interface CardStackProps {
    cards : CardStack;
    x : number,
    moveCard: (sourceX : number, sourceY : number, targetX : number) => void
}

interface DropItem {
    x : number,
    y : number
}

const CardStackComponent = ({cards, x, moveCard} : CardStackProps) => {
    const [_, drop] = useDrop({
        accept: "card",
        canDrop : (item : DropItem, monitor) => {
            if (item.x == x)
                return false;
            return true;
        },
        drop : (item : DropItem, monitor) => {
            moveCard(item.x, item.y, x);
        }
    })

    return (
        <div ref={drop} className={[styles.card__stack, "column"].join(" ")}>
            {
                cards.hidden.map(c =>
                        <CardComponent card={c} hidden={true} />
                    )
            }
            {
                cards.shown.map((c, y) =>
                    <CardComponent coordinates={{x, y}} card={c} hidden={false} />
                )
            }
            {cards.hidden.length + cards.shown.length === 0 && <EmptyCardComponent/> }
        </div>
    );
};

export default CardStackComponent;