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

type BoardComponentProps = {
    game : SolitaireGame,
    canMoveCard : CanMoveCardFunction,
    moveCard : MoveCardFunction,
    showDeckCard : () => void,
}

const BoardComponent : FC<BoardComponentProps> = ({game, canMoveCard, moveCard, showDeckCard}) => {

    return (
        <div className={styles.board}>
            <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                <div className={[styles.board__row, "row"].join(" ")}>
                    <DeckComponent showDeckCard={showDeckCard} hidden={game.deck.hidden} shown={game.deck.shown}/>
                    <div className={[styles.board__foundations, "row"].join(" ")}>
                        {
                            game.foundations.map((f, x) =>
                                <FoundationComponent key={x} x={x} canMoveCard={canMoveCard} moveCard={moveCard} deck={f}/>
                            )}
                    </div>
                </div>
                <div className={[styles.board__layout, "row"].join(" ")}>
                    {
                        game.layout.map((f, x) =>
                            <CardStackComponent key={x} x={x} canMoveCard={canMoveCard} moveCard={moveCard} cards={f}/>
                        )
                    }
                </div>
            </DndProvider>
        </div>
    );
};

export default BoardComponent;