import React from 'react';
import CardComponent from "./CardComponent";
import styles from "./CardStackComponent.module.css"
import EmptyCardComponent from "./EmptyCardComponent";
import CardStack from "../../models/CardStack";
import PlacementType from "../../models/PlacementType";
import PlacePosition from "../../models/PlacePosition";
import useCardDrop from "../../hooks/UseCardDrop";
import MoveCardFunction from "../../models/MoveCardFunction";

type CardStackProps = {
    cards : CardStack;
    x : number,
    moveCard: MoveCardFunction
}

const CardStackComponent = ({cards, x, moveCard} : CardStackProps) => {
    const placePosition : PlacePosition = {
        x : x,
        placement : PlacementType.Layout
    }
    const [drop] = useCardDrop(placePosition, moveCard)

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