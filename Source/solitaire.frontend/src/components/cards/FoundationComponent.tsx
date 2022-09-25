import React, {FC} from 'react';
import Deck from "../../models/Deck";
import CardGroupComponent from "./CardGroupComponent";
import {useDrop} from "react-dnd";
import PlacementType from "../../models/PlacementType";
import CardPosition from "../../models/CardPosition";
import PlacePosition from "../../models/PlacePosition";
import useCardDrop from "../../hooks/UseCardDrop";

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

    const [drop] = useCardDrop(placePosition, moveCard);

    return (
        <div ref={drop}>
            <CardGroupComponent placement={PlacementType.Foundation} x={x} deck={deck} hidden={false}/>
        </div>
    );
};

export default FoundationComponent ;