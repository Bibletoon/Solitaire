import CardStack from "./CardStack";
import Deck from "./Deck";
import Card from "./Card";
import PlacementType from "./PlacementType";
import placementType from "./PlacementType";
import CardPosition from "./CardPosition";
import PlacePosition from "./PlacePosition";

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

    moveCard(cardPosition : CardPosition, placePosition : PlacePosition) : void {
        let cards : Card[];
        switch (cardPosition.placement) {
            case PlacementType.Deck:
                cards = this.deck.shown.splice(cardPosition.y, 1);
                break
            case PlacementType.Foundation:
                cards = this.foundations[cardPosition.x].splice(cardPosition.y, 1);
                break
            case PlacementType.Layout:
                cards = this.layout[cardPosition.x].takeCards(cardPosition.y);
                break
        }

        switch (placePosition.placement) {
            case PlacementType.Layout:
                this.layout[placePosition.x].placeCards(cards);
                break
            case PlacementType.Foundation:
                this.foundations[placePosition.x].push(...cards);
                break
        }
    }
}