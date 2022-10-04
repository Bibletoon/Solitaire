import React, {FC} from 'react';
import CardStackComponent from "../cards/CardStackComponent";
import styles from "./BoardComponent.module.css"
import FoundationComponent from "../cards/FoundationComponent";
import DeckComponent from "../cards/DeckComponent";
import useGame from "../../hooks/UseGame";
import SolitaireGame from "../../models/SolitaireGame";
import MoveCardFunction from "../../models/MoveCardFunction";

type BoardComponentProps = {
    game : SolitaireGame,
    moveCard : MoveCardFunction,
    showDeckCard : () => void,
}

const BoardComponent : FC<BoardComponentProps> = ({game, moveCard, showDeckCard}) => {

    return (
        <div className={styles.board}>
            <div className={[styles.board__row, "row"].join(" ")}>
                <DeckComponent showDeckCard={showDeckCard} hidden={game.deck.hidden} shown={game.deck.shown}/>
                <div className={[styles.board__foundations, "row"].join(" ")}>
                    {
                        game.foundations.map((f, x) =>
                            <FoundationComponent key={x} x={x} moveCard={moveCard} deck={f}/>
                        )}
                </div>
            </div>
            <div className={[styles.board__layout, "row"].join(" ")}>
                {
                    game.layout.map((f, x) =>
                        <CardStackComponent key={x} x={x} moveCard={moveCard} cards={f}/>
                    )
                }
            </div>
        </div>
    );
};

export default BoardComponent;