import CardStack from "./CardStack";
import Deck from "./Deck";
import Card from "./Card";
import PlacementType from "./PlacementType";
import placementType from "./PlacementType";
import CardPosition from "./CardPosition";
import PlacePosition from "./PlacePosition";
import CardValue from "./CardValue";
import {SuitUtils} from "./Suit";

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

    canMoveCard(cardPosition : CardPosition, placePosition : PlacePosition) : boolean {
        let cards : Card[];
        switch (cardPosition.placement) {
            case PlacementType.Deck:
                cards = [this.deck.shown[this.deck.shown.length - 1]];
                break
            case PlacementType.Foundation:
                cards = this.foundations[cardPosition.x].slice(cardPosition.y, cardPosition.y+1);
                break
            case PlacementType.Layout:
                cards = this.layout[cardPosition.x].shown.slice(cardPosition.y);
                break
        }

        if (placePosition.placement === placementType.Foundation && cards.length !== 1)
            return false;

        let placeCards : Card[];
        switch (placePosition.placement) {
            case PlacementType.Layout:
                placeCards = this.layout[placePosition.x].shown;
                if (placeCards.length === 0) return cards[0].value === CardValue.king;
                if (placeCards[placeCards.length - 1].value !== cards[0].value + 1) return false;

                let cardRed = SuitUtils.isRed(cards[0].suit);
                let placeRed = SuitUtils.isRed(placeCards[placeCards.length - 1].suit);
                return !(cardRed === placeRed);
                break
            case PlacementType.Foundation:
                placeCards = this.foundations[placePosition.x];
                if (placeCards.length === 0) return cards[0].value === CardValue.ace;
                if (placeCards[placeCards.length - 1].suit != cards[0].suit) return false;
                if (placeCards[placeCards.length - 1].value === cards[0].value - 1) return true;
                break
        }

        return false;
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