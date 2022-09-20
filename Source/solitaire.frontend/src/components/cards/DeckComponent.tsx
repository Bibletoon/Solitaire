import React, {FC} from 'react';
import Deck from "../../models/Deck";
import styles from "./DeckComponent.module.css"
import CardComponent from "./CardComponent";
import EmptyCardComponent from "./EmptyCardComponent";

interface DeckComponentProps {
    deck : Deck
    hidden? : boolean
}

const DeckComponent : FC<DeckComponentProps> = ({deck, hidden}) => {
    return (
        <div className={styles.deck}>
            {deck[deck.length-2] && <CardComponent card={deck[deck.length-2]} hidden={hidden}/> }
            {deck[deck.length-1] && <CardComponent className={styles.overlay} card={deck[deck.length-1]} hidden={hidden}/> }
            {!deck[0] && <EmptyCardComponent/>}
        </div>
    );
};

DeckComponent.defaultProps = {
    hidden: true
}
export default DeckComponent;