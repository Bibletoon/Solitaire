import Suit from "./Suit";
import CardValue from "./CardValue";

class Card {
    suit: Suit;
    value: CardValue;

    constructor(suit : Suit, value: CardValue) {
        this.suit = suit;
        this.value = value;
    }
}


export default Card;