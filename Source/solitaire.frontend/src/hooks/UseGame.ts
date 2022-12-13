import {useState} from "react";
import SolitaireGame from "../models/SolitaireGame";
import {shuffle} from "../models/DeckUtils";
import CardPosition from "../models/CardPosition";
import PlacePosition from "../models/PlacePosition";
import ClassicDeckCreator from "../models/deckInitializer/ClassicDeckCreator";
import {useStopwatch} from "react-timer-hook";

const useGame = () => {
    const deckCreator = new ClassicDeckCreator();
    let deck = shuffle(deckCreator.create());
    let [startDeck, setStartDeck] = useState(deck);
    const [game, setGame] = useState(SolitaireGame.create([...startDeck]));
    const [movesCount, setMovesCount] = useState(0);
    const {seconds, minutes, hours, start, pause, reset} = useStopwatch({autoStart: false});

    const moveCard = (cardPosition : CardPosition, placePosition : PlacePosition) : void => {
        if (movesCount == 0)
            start();
        game.moveCard(cardPosition, placePosition);
        setMovesCount(movesCount + 1);
        setGame(new SolitaireGame(game.deck, game.foundations, game.layout));
    }

    const canMoveCard = (cardPosition : CardPosition, placePosition : PlacePosition) => game.canMoveCard(cardPosition, placePosition);

    const showDeckCard = () : void => {
        if (movesCount == 0)
            start();
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

    const restartGame = () : void => {
        setMovesCount(0);
        setGame(SolitaireGame.create([...startDeck]));
        reset(undefined, false);
    }

    const newGame = () : void => {
        let deck = shuffle(deckCreator.create());
        setStartDeck(deck);
        setMovesCount(0);
        setGame(SolitaireGame.create([...deck]));
        reset(undefined, false);
    }

    return {game, movesCount, seconds, minutes, hours, canMoveCard, moveCard, showDeckCard, newGame, restartGame}
}

export default useGame;