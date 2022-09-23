import React, {FC, useEffect, useState} from 'react';
import CardStackComponent from "../cards/CardStackComponent";
import styles from "./BoardComponent.module.css"
import SolitaireGame from "../../models/SolitaireGame";
import ClassicDeckCreator from "../../models/deckInitializer/ClassicDeckCreator";
import {shuffle} from "../../models/DeckUtils";
import FoundationComponent from "../cards/FoundationComponent";
import CardPosition from "../../models/CardPosition";
import PlacePosition from "../../models/PlacePosition";
import DeckComponent from "../cards/DeckComponent";

const BoardComponent : FC = () => {
    const deckCreator = new ClassicDeckCreator();

    const [game, setGame] = useState<SolitaireGame>(SolitaireGame.create(shuffle(deckCreator.create())));
    const moveCard = (cardPosition : CardPosition, placePosition : PlacePosition) : void => {
        game.moveCard(cardPosition, placePosition);
        reset()
    }

    const showDeckCard = () : void => {
        let card = game.deck.hidden.pop();
        if (card === undefined) {
            game.deck.hidden = game.deck.shown.reverse();
            game.deck.shown = [];
        } else {
            game.deck.shown.push(card);
        }
        reset()
    }

    const [seed, setSeed] = useState(1);
    const reset = () => {
        setSeed(Math.random());
    }

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