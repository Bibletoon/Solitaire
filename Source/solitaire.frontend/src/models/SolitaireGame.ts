import CardStack from "./CardStack";
import Deck from "./Deck";
import Card from "./Card";

export default class SolitaireGame {
    deck: CardStack
    foundations: Array<Deck>
    layout: Array<CardStack>

    constructor(deck : CardStack, foundations : Deck[], layout : CardStack[]) {
        this.deck = deck;
        this.foundations = foundations;
        this.layout = layout;
    }

    static create(deck: Deck) : SolitaireGame {
        let foundations = new Array<Deck>(4);
        for (let i = 0; i < 4; i++) {
            foundations[i] = new Array<Card>();
        }
        let layout = new Array(7);

        for (let i = 0; i < 7; i++) {
            layout[i] = new CardStack(deck.splice(0, 7-i))
            layout[i].showCard();
        }

        let finalDeck = new CardStack(deck);
        return new SolitaireGame(finalDeck, foundations, layout);
    }

    moveCard(sourceX : number, sourceY : number, targetX : number) : void {
        let cards = this.layout[sourceX].takeCards(sourceY)
        this.layout[targetX].placeCards(cards)
    }
}