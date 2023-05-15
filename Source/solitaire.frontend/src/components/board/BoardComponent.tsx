import React, {FC} from 'react';
import CardStackComponent from "../cards/CardStackComponent";
import styles from "./BoardComponent.module.css"
import FoundationComponent from "../cards/FoundationComponent";
import DeckComponent from "../cards/DeckComponent";
import SolitaireGame from "../../models/SolitaireGame";
import {CanMoveCardFunction, MoveCardFunction} from "../../models/MoveCardFunction";
import {MultiBackend} from "react-dnd-multi-backend";
import {HTML5toTouch} from "rdndmb-html5-to-touch";
import {DndProvider} from "react-dnd";
import styled from "styled-components";

const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 375px;

  @media (min-width: 635px) {
      width: 620px;
  }

  @media (min-width:1300px) {
      width: 770px;
  }
`

const BoardRow = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`

const BoardFoundations = styled.div`
  display: flex;
  flex-direction: row;
  
`

const BoardLayout = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`;

type BoardComponentProps = {
    game : SolitaireGame,
    canMoveCard : CanMoveCardFunction,
    moveCard : MoveCardFunction,
    showDeckCard : () => void,
}

const BoardComponent : FC<BoardComponentProps> = ({game, canMoveCard, moveCard, showDeckCard}) => {

    return (
        <Board>
            <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                <BoardRow>
                    <DeckComponent showDeckCard={showDeckCard} hidden={game.deck.hidden} shown={game.deck.shown}/>
                    <BoardFoundations>
                        {
                            game.foundations.map((f, x) =>
                                <FoundationComponent key={x} x={x} canMoveCard={canMoveCard} moveCard={moveCard} deck={f}/>
                            )}
                    </BoardFoundations>
                </BoardRow>
                <BoardLayout>
                    {
                        game.layout.map((f, x) =>
                            <CardStackComponent key={x} x={x} canMoveCard={canMoveCard} moveCard={moveCard} cards={f}/>
                        )
                    }
                </BoardLayout>
            </DndProvider>
        </Board>
    );
};

export default BoardComponent;