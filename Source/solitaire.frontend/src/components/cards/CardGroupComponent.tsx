import React, {FC} from 'react';
import CardComponent from "./CardComponent";
import EmptyCardComponent from "./EmptyCardComponent";
import PlacementType from "../../models/PlacementType";
import Card from "../../models/Card";
import styled from "styled-components";

const Deck = styled.div`
  position: relative;
`;

type DeckComponentProps = {
    deck : Card[]
    x : number,
    placement : PlacementType,
    hidden? : boolean
    onClick? : React.MouseEventHandler<HTMLDivElement>
}

const CardGroupComponent : FC<DeckComponentProps> = ({deck, x, placement, hidden, onClick}) => {
    return (
        <Deck onClick={onClick}>
            {deck.map((c, y) =>
                y === deck.length-1
                    ? <CardComponent key={y} position={{x, y, placement}} card={deck[y]} hidden={hidden} canDrag={!hidden}/>
                    : <CardComponent key={y} invisible={true} position={{x, y, placement}} card={deck[y]} hidden={true} canDrag={!hidden}/>
            )}
            {!deck[0] && <EmptyCardComponent/>}
        </Deck>
    );
};

CardGroupComponent.defaultProps = {
    hidden: true
}

export default CardGroupComponent;