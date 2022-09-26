import React from 'react';
import BoardComponent from "../board/BoardComponent";
import GameInfoComponent from "../board/GameInfoComponent";
import useGame from "../../hooks/UseGame";
import Container from "../layout/Container";

const GameComponent = () => {
    const {game, movesCount, moveCard, showDeckCard} = useGame();

    return (
        <Container>
            <BoardComponent game={game} moveCard={moveCard} showDeckCard={showDeckCard}/>
            <GameInfoComponent movesCount={movesCount}/>
        </Container>
    );
};

export default GameComponent;