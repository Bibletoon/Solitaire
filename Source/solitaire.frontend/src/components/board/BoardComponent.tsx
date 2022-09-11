import React, {FC} from 'react';
import CardComponent from "../cards/CardComponent";
import CardStackComponent from "../cards/CardStackComponent";
import Card from "../../models/Card";
import Suit from "../../models/Suit";
import CardValue from "../../models/CardValue";
import styles from "./BoardComponent.module.css"

const BoardComponent : FC = () => {
    return (
        <div className={styles.board}>
            <div className={[styles.board__row, "row"].join(" ")}>
                <div className={[styles.board__deck, "row"].join(" ")}>
                    <CardComponent/>
                    <CardComponent/>
                </div>
                <div className={[styles.board__foundations, "row"].join(" ")}>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </div>
            </div>
            <div className={[styles.board__layout, "row"].join(" ")}>
                <CardStackComponent cards={
                    [
                        new Card(Suit.Heart, CardValue.ace),
                        new Card(Suit.Heart, CardValue.ace),
                        new Card(Suit.Heart, CardValue.ace),
                        new Card(Suit.Heart, CardValue.ace),
                        new Card(Suit.Heart, CardValue.ace)
                    ]} />
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
        </div>
    );
};

export default BoardComponent;