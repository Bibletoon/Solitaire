import React, {FC} from 'react';
import Deck from "../../models/Deck";
import CardGroupComponent from "./CardGroupComponent";
import PlacementType from "../../models/PlacementType";
import PlacePosition from "../../models/PlacePosition";
import useCardDrop from "../../hooks/UseCardDrop";
import {MoveCardFunction, CanMoveCardFunction} from "../../models/MoveCardFunction";

type FoundationComponentProps = {
    deck : Deck,
    x : number,
    canMoveCard : CanMoveCardFunction,
    moveCard: MoveCardFunction
}

const FoundationComponent : FC<FoundationComponentProps> = ({deck, x, canMoveCard, moveCard}) => {
    const placePosition : PlacePosition = {
        x : x,
        placement : PlacementType.Foundation
    }

    const [drop] = useCardDrop(placePosition, canMoveCard, moveCard);

    return (
        <div ref={drop}>
            <CardGroupComponent placement={PlacementType.Foundation} x={x} deck={deck} hidden={false}/>
        </div>
    );
};

export default FoundationComponent ;