import React from 'react';
import CardComponent from "./CardComponent";
import styles from "./CardStackComponent.module.css"
import EmptyCardComponent from "./EmptyCardComponent";
import CardStack from "../../models/CardStack";
import {useDrop} from "react-dnd";
import PlacementType from "../../models/PlacementType";
import CardPosition from "../../models/CardPosition";
import PlacePosition from "../../models/PlacePosition";

type CardStackProps = {
    cards : CardStack;
    x : number,
    moveCard: (cardPosition : CardPosition, placePosition : PlacePosition) => void
}

const CardStackComponent = ({cards, x, moveCard} : CardStackProps) => {
    const placePosition : PlacePosition = {
        x : x,
        placement : PlacementType.Layout
    }
    const [_, drop] = useDrop({
        accept: "card",
        canDrop : (item : CardPosition, monitor) => {
            if (item.x === x && item.placement === PlacementType.Layout)
                return false;
            return true;
        },
        drop : (item : CardPosition, monitor) => {
            moveCard(item, placePosition);
        }
    })

    return (
        <div ref={drop} className={[styles.card__stack, "column"].join(" ")}>
            {
                cards.hidden.map((c, y) =>
                        <CardComponent key={`hidden-${x}-${y}`} position={{x, y : -y, placement : PlacementType.Layout}} card={c} hidden={true} canDrag={false} />
                    )
            }
            {
                cards.shown.map((c, y) =>
                    <CardComponent key={`shown-${x}-${y}`} position={{x, y, placement : PlacementType.Layout}} card={c} hidden={false} />
                )
            }
            {cards.hidden.length + cards.shown.length === 0 && <EmptyCardComponent/> }
        </div>
    );
};

export default CardStackComponent;