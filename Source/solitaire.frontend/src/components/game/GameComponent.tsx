import React from 'react';
import BoardComponent from "../board/BoardComponent";
import GameInfoComponent from "../board/GameInfoComponent";
import useGame from "../../hooks/UseGame";
import Container from "../layout/Container";

const GameComponent = () => {
    const {game, movesCount, seconds, minutes, hours, canMoveCard, moveCard, showDeckCard, newGame, restartGame} = useGame();

    return (
        <Container>
            <BoardComponent game={game} canMoveCard={canMoveCard} moveCard={moveCard} showDeckCard={showDeckCard}/>
            <GameInfoComponent seconds={seconds} minutes={minutes} hours={hours} movesCount={movesCount} newGame={newGame} restartGame={restartGame}/>
        </Container>
    );
};

export default GameComponent;