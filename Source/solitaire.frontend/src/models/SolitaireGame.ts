import CardStack from "./CardStack";
import Deck from "./Deck";
import Card from "./Card";

export default class SolitaireGame {
    deck: CardStack
    foundations: Array<Deck>
    layout: Array<CardStack>

    constructor(deck: Deck) {
        this.foundations = new Array<Deck>(4);
        for (let i = 0; i < 4; i++) {
            this.foundations[i] = new Array<Card>();
        }
        this.layout = new Array(7);
        this.initializeLayout(deck.splice(0, 28));
        this.deck = new CardStack(deck);
    }

    initializeLayout(deck : Deck) {
        for (let i = 0; i < 7; i++) {
            this.layout[i] = new CardStack(deck.splice(0, 7-i))
            this.layout[i].showCard();
        }
    }
}