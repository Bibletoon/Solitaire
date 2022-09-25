import React, {FC} from 'react';
import styles from "./DeckComponent.module.css";
import CardGroupComponent from "./CardGroupComponent";
import Card from "../../models/Card";
import PlacementType from "../../models/PlacementType";

type DeckComponentProps = {
    hidden : Card[],
    shown : Card[],
    showDeckCard : () => void
}

const DeckComponent : FC<DeckComponentProps> = ({hidden, shown, showDeckCard}) => {
    return (
        <div className={[styles.board__deck, "row"].join(" ")}>
            <CardGroupComponent placement={PlacementType.Deck} x={0} deck={hidden} onClick={showDeckCard}/>
            <CardGroupComponent placement={PlacementType.Deck} x={1} deck={shown} hidden={false}/>
        </div>
    );
};

export default DeckComponent;