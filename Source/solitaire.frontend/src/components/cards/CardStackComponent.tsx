import React from 'react';
import CardComponent from "./CardComponent";
import EmptyCardComponent from "./EmptyCardComponent";
import CardStack from "../../models/CardStack";
import PlacementType from "../../models/PlacementType";
import PlacePosition from "../../models/PlacePosition";
import useCardDrop from "../../hooks/UseCardDrop";
import {MoveCardFunction, CanMoveCardFunction} from "../../models/MoveCardFunction";
import styled from "styled-components";

const CardStackBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  div:not(:last-child) {
    margin-bottom: -44px;
  }

  @media (min-width: 635px) {
    div:not(:last-child) {
      margin-bottom: -74px;
    }
  }

  @media (min-width: 1300px) {
    div:not(:last-child) {
      margin-bottom: -115px;
    }
  }
`;

type CardStackProps = {
    cards : CardStack;
    x : number,
    canMoveCard : CanMoveCardFunction,
    moveCard: MoveCardFunction
}

const CardStackComponent = ({cards, x, canMoveCard, moveCard} : CardStackProps) => {
    const placePosition : PlacePosition = {
        x : x,
        placement : PlacementType.Layout
    }
    const [drop] = useCardDrop(placePosition, canMoveCard, moveCard)

    return (
        <CardStackBlock ref={drop}>
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
        </CardStackBlock>
    );
};

export default CardStackComponent;