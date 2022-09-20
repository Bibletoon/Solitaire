import IDeckCreator from "./IDeckCreator";
import Deck from "../Deck";
import Suit from "../Suit";
import CardValue from "../CardValue";
import Card from "../Card";

export default class ClassicDeckCreator implements IDeckCreator {
    create() : Deck {
        let deck = new Array<Card>();
        [Suit.Heart, Suit.Spade, Suit.Diamond, Suit.Spade].forEach(s => {
            [
                CardValue.two,
                CardValue.three,
                CardValue.four,
                CardValue.five,
                CardValue.six,
                CardValue.seven,
                CardValue.eight,
                CardValue.nine,
                CardValue.ten,
                CardValue.jack,
                CardValue.queen,
                CardValue.king
            ].forEach(v => {
                deck.push(new Card(s, v))
            })
        })

        return deck;
    }
}