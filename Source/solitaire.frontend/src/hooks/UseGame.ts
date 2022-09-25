import {useState} from "react";
import SolitaireGame from "../models/SolitaireGame";
import {shuffle} from "../models/DeckUtils";
import CardPosition from "../models/CardPosition";
import PlacePosition from "../models/PlacePosition";
import ClassicDeckCreator from "../models/deckInitializer/ClassicDeckCreator";

const useGame = () => {
    const deckCreator = new ClassicDeckCreator();
    const [game, setGame] = useState(SolitaireGame.create(shuffle(deckCreator.create())));

    const moveCard = (cardPosition : CardPosition, placePosition : PlacePosition) : void => {
        game.moveCard(cardPosition, placePosition);
        setGame(new SolitaireGame(game.deck, game.foundations, game.layout));
    }

    const showDeckCard = () : void => {
        const card = game.deck.hidden.pop();
        if (card === undefined) {
            game.deck.hidden = game.deck.shown.reverse();
            game.deck.shown = [];
        } else {
            game.deck.shown.push(card);
        }
        setGame(new SolitaireGame(game.deck, game.foundations, game.layout))
    }

    return {game, moveCard, showDeckCard}
}

export default useGame;