import {useState} from "react";
import SolitaireGame from "../models/SolitaireGame";
import {shuffle} from "../models/DeckUtils";
import CardPosition from "../models/CardPosition";
import PlacePosition from "../models/PlacePosition";
import ClassicDeckCreator from "../models/deckInitializer/ClassicDeckCreator";

const useGame = () => {
    const deckCreator = new ClassicDeckCreator();
    const [game, setGame] = useState(SolitaireGame.create(shuffle(deckCreator.create())));
    const [movesCount, setMovesCount] = useState(0);

    const moveCard = (cardPosition : CardPosition, placePosition : PlacePosition) : void => {
        game.moveCard(cardPosition, placePosition);
        setMovesCount(movesCount + 1);
        setGame(new SolitaireGame(game.deck, game.foundations, game.layout));
    }

    const canMoveCard = (cardPosition : CardPosition, placePosition : PlacePosition) => game.canMoveCard(cardPosition, placePosition);

    const showDeckCard = () : void => {
        const card = game.deck.hidden.pop();
        if (card === undefined) {
            game.deck.hidden = game.deck.shown.reverse();
            game.deck.shown = [];
        } else {
            game.deck.shown.push(card);
        }
        setMovesCount(movesCount + 1);
        setGame(new SolitaireGame(game.deck, game.foundations, game.layout))
    }

    return {game, movesCount, canMoveCard, moveCard, showDeckCard}
}

export default useGame;