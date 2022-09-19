import React, {FC} from 'react';
import CardComponent from "../cards/CardComponent";
import CardStackComponent from "../cards/CardStackComponent";
import Card from "../../models/Card";
import Suit from "../../models/Suit";
import CardValue from "../../models/CardValue";
import styles from "./BoardComponent.module.css"
import SolitaireGame from "../../models/SolitaireGame";
import ClassicDeckCreator from "../../models/deckInitializer/ClassicDeckCreator";
import {shuffle} from "../../models/DeckUtils";
import DeckComponent from "../cards/DeckComponent";

const BoardComponent : FC = () => {
    const deckCreator = new ClassicDeckCreator();
    const game = new SolitaireGame(shuffle(deckCreator.create()))

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
                    game.layout.map(f =>
                        <CardStackComponent cards={f}/>
                    )
                }
            </div>
        </div>
    );
};

export default BoardComponent;