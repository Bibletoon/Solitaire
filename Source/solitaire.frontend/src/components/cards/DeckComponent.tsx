import React, {FC} from 'react';
import CardGroupComponent from "./CardGroupComponent";
import Card from "../../models/Card";
import PlacementType from "../../models/PlacementType";
import styled from "styled-components";

const DeckContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

type DeckComponentProps = {
    hidden : Card[],
    shown : Card[],
    showDeckCard : () => void
}

const DeckComponent : FC<DeckComponentProps> = ({hidden, shown, showDeckCard}) => {
    return (
        <DeckContainer>
            <CardGroupComponent placement={PlacementType.Deck} x={0} deck={hidden} onClick={showDeckCard}/>
            <CardGroupComponent placement={PlacementType.Deck} x={1} deck={shown} hidden={false}/>
        </DeckContainer>
    );
};

export default DeckComponent;