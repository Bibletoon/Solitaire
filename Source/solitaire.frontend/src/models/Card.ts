import Suit from "./Suit";
import CardValue from "./CardValue";

class Card {
    readonly baseCharCode : number = 127137;

    suit: Suit;
    value: CardValue;

    constructor(suit : Suit, value: CardValue) {
        this.suit = suit;
        this.value = value;
    }

     toChar() : string {
        return String.fromCodePoint(this.baseCharCode + this.suit*16+this.value);
     }
}


export default Card;