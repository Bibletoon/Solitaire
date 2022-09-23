import React, {FC, MouseEventHandler} from 'react';
import Deck from "../../models/Deck";
import styles from "./CardGroupComponent.module.css"
import CardComponent from "./CardComponent";
import EmptyCardComponent from "./EmptyCardComponent";
import PlacementType from "../../models/PlacementType";
import Card from "../../models/Card";

interface DeckComponentProps {
    deck : Card[]
    x : number,
    placement : PlacementType,
    hidden? : boolean
    onClick? : React.MouseEventHandler<HTMLDivElement>
}

const CardGroupComponent : FC<DeckComponentProps> = ({deck, x, placement, hidden, onClick}) => {
    return (
        <div className={styles.deck} onClick={onClick}>
            {deck.map((c, y) =>
                y == deck.length-1
                    ? <CardComponent key={y} position={{x, y, placement}} card={deck[y]} hidden={hidden} canDrag={!hidden}/>
                    : <CardComponent key={y} className={styles.invisible} position={{x, y, placement}} card={deck[y]} hidden={true} canDrag={!hidden}/>
            )}
            {!deck[0] && <EmptyCardComponent/>}
        </div>
    );
};

CardGroupComponent.defaultProps = {
    hidden: true
}

export default CardGroupComponent;