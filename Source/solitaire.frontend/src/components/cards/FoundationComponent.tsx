import React, {FC} from 'react';
import Deck from "../../models/Deck";
import CardGroupComponent from "./CardGroupComponent";
import {useDrop} from "react-dnd";
import PlacementType from "../../models/PlacementType";
import CardPosition from "../../models/CardPosition";
import PlacePosition from "../../models/PlacePosition";

type FoundationComponentProps = {
    deck : Deck,
    x : number,
    moveCard: (cardPosition : CardPosition, placePosition : PlacePosition) => void
}

const FoundationComponent : FC<FoundationComponentProps> = ({deck, x, moveCard}) => {
    const placePosition : PlacePosition = {
        x : x,
        placement : PlacementType.Foundation
    }

    const [_, drop] = useDrop({
        accept: "card",
        canDrop : (item : CardPosition, monitor) => {
            if (item.x == x && item.placement === PlacementType.Foundation)
                return false;
            return true;
        },
        drop : (item : CardPosition, monitor) => {
            moveCard(item, placePosition);
        }
    })

    return (
        <div ref={drop}>
            <CardGroupComponent placement={PlacementType.Foundation} x={x} deck={deck} hidden={false}/>
        </div>
    );
};

export default FoundationComponent ;