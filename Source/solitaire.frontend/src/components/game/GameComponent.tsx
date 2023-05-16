import React from 'react';
import BoardComponent from "../board/BoardComponent";
import GameInfoComponent from "../board/GameInfoComponent";
import useGame from "../../hooks/UseGame";
import Container from "../layout/Container";
import {Button, Typography} from "@mui/material";
import Fireworks from "@fireworks-js/react";
import styles from '../ModalComponent.module.css';
import ModalComponent from "../UI/ModalComponent";



const GameComponent = () => {
    const {game, gameEnded, movesCount, seconds, minutes, hours, canMoveCard, moveCard, showDeckCard, newGame, restartGame} = useGame();

    return (
        <Container>
            { gameEnded &&
                <div>
                    <Fireworks
                        options={{
                            rocketsPoint: {
                                min: 0,
                                max: 100
                            }
                        }}
                        style={{
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            position: 'fixed',
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 111
                        }}
                    />
                    <ModalComponent open={gameEnded}>
                            <Typography align="center" variant={"h5"}>Ура, победа!</Typography>
                                <Button fullWidth={true} onClick={async () => {
                                    newGame();
                                }} variant="contained">Новая игра</Button>
                    </ModalComponent>
                </div>
            }
            <BoardComponent game={game} canMoveCard={canMoveCard} moveCard={moveCard} showDeckCard={showDeckCard}/>
            <GameInfoComponent seconds={seconds} minutes={minutes} hours={hours} movesCount={movesCount} newGame={newGame} restartGame={restartGame}/>
        </Container>
    );
};

export default GameComponent;