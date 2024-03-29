import {useState} from "react";
import SolitaireGame from "../models/SolitaireGame";
import {shuffle} from "../models/DeckUtils";
import CardPosition from "../models/CardPosition";
import PlacePosition from "../models/PlacePosition";
import ClassicDeckCreator from "../models/deckInitializer/ClassicDeckCreator";
import {useStopwatch} from "react-timer-hook";

type GameInfo = {
    game: SolitaireGame;
    gameEnded: boolean;
    movesCount: number;
    timer: {
        seconds: number;
        minutes: number;
        hours: number;
    }
    actions: {
        canMoveCard: (cardPosition : CardPosition, placePosition : PlacePosition) => boolean;
        moveCard: (cardPosition : CardPosition, placePosition : PlacePosition) => void;
        showDeckCard: () => void;
        newGame: () => void;
        restartGame: () => void;
    }
}

const useGame = () : GameInfo => {
    const deckCreator = new ClassicDeckCreator();
    let deck = shuffle(deckCreator.create());
    let [startDeck, setStartDeck] = useState(deck);
    const [game, setGame] = useState(SolitaireGame.create([...startDeck]));
    const [movesCount, setMovesCount] = useState(0);
    const {seconds, minutes, hours, start, pause, reset} = useStopwatch({autoStart: false});
    const [gameEnded, setGameEnded] = useState(false);

    const checkGameEnd = () : void => {
        if (game.foundations.reduce((s, el) => s+el.length, 0) === 52) {
            const bestScore = localStorage.getItem("bestScore");
            if (bestScore === null || parseInt(bestScore) > movesCount) {
                localStorage.setItem("bestScore", movesCount.toString());
            }

            const bestTime = localStorage.getItem("bestTime");
            if (bestTime === null || parseInt(bestTime) > hours*3600 + minutes*60 + seconds) {
                localStorage.setItem("bestTime", hours*3600 + minutes*60 + seconds + "");
            }
            setGameEnded(true);
            pause();
        }
    }

    const moveCard = (cardPosition : CardPosition, placePosition : PlacePosition) : void => {
        if (movesCount === 0)
            start();
        game.moveCard(cardPosition, placePosition);
        setMovesCount(movesCount + 1);
        setGame(new SolitaireGame(game.deck, game.foundations, game.layout));
        checkGameEnd();
    }

    const canMoveCard = (cardPosition : CardPosition, placePosition : PlacePosition) => !gameEnded && game.canMoveCard(cardPosition, placePosition);

    const showDeckCard = () : void => {
        if (movesCount === 0)
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
        setGameEnded(false);
        setMovesCount(0);
        setGame(SolitaireGame.create([...startDeck]));
        reset(undefined, false);
    }

    const newGame = () : void => {
        setGameEnded(false);
        let deck = shuffle(deckCreator.create());
        setStartDeck(deck);
        setMovesCount(0);
        setGame(SolitaireGame.create([...deck]));
        reset(undefined, false);
    }

    return {
            game,
            gameEnded,
            movesCount,
            timer: {
                seconds,
                minutes,
                hours
            },
            actions: {
                canMoveCard, 
                moveCard, 
                showDeckCard, 
                newGame, 
                restartGame
            },
    }
}

export default useGame;