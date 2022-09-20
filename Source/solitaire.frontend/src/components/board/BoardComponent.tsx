import React, {FC, useState} from 'react';
import CardStackComponent from "../cards/CardStackComponent";
import styles from "./BoardComponent.module.css"
import SolitaireGame from "../../models/SolitaireGame";
import ClassicDeckCreator from "../../models/deckInitializer/ClassicDeckCreator";
import {shuffle} from "../../models/DeckUtils";
import DeckComponent from "../cards/DeckComponent";

const BoardComponent : FC = () => {
    const deckCreator = new ClassicDeckCreator();
    const [game, setGame] = useState<SolitaireGame>(SolitaireGame.create(shuffle(deckCreator.create())));
    const moveCard = (sourceX : number, sourceY : number, targetX : number) : void => {
        const newGame = new SolitaireGame(game.deck, game.foundations, game.layout);
        newGame.moveCard(sourceX, sourceY, targetX);
        setGame(newGame);
    }


    return (
        <div className={styles.board}>
            <div className={[styles.board__row, "row"].join(" ")}>
                <div className={[styles.board__deck, "row"].join(" ")}>
                    <DeckComponent deck={game.deck.hidden} />
                    <DeckComponent deck={game.deck.shown} hidden={false}/>
                </div>
                <div className={[styles.board__foundations, "row"].join(" ")}>
                    <DeckComponent deck={game.foundations[0]} hidden={false}/>
                    <DeckComponent deck={game.foundations[1]} hidden={false}/>
                    <DeckComponent deck={game.foundations[2]} hidden={false}/>
                    <DeckComponent deck={game.foundations[3]} hidden={false}/>
                </div>
            </div>
            <div className={[styles.board__layout, "row"].join(" ")}>
                {
                    game.layout.map((f, x) =>
                        <CardStackComponent x={x} moveCard={moveCard} cards={f}/>
                    )
                }
            </div>
        </div>
    );
};

export default BoardComponent;