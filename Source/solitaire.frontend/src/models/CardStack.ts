import Card from "./Card";
import Deck from "./Deck";

export default class CardStack {
    hidden : Deck
    shown : Deck

    constructor(deck : Deck = new Array<Card>()) {
        this.hidden = deck;
        this.shown = new Array<Card>;
    }

    showCard() : void {
        let card = this.hidden.pop();
        if (card === undefined)
            return;

        this.shown.push(card)
    }

    takeCards(y : number) : Card[] {
        const cards = this.shown.splice(y);
        if (this.shown.length === 0)
            this.showCard();
        return cards;
    }

    placeCards(cards : Card[]) {
        this.shown.push(...cards)
    }
}