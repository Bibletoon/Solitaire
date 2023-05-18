import React from 'react';
import BoardComponent from "../board/BoardComponent";
import GameInfoComponent from "../board/GameInfoComponent";
import useGame from "../../hooks/UseGame";
import Container from "../layout/Container";
import {Button, Typography} from "@mui/material";
import Fireworks from "@fireworks-js/react";
import ModalComponent from "../UI/ModalComponent";



const GameComponent = () => {
    const gameInfo = useGame();

    return (
        <Container>
            { gameInfo.gameEnded &&
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
                    <ModalComponent open={gameInfo.gameEnded}>
                            <Typography align="center" variant={"h5"}>Ура, победа!</Typography>
                                <Button fullWidth={true} onClick={async () => {
                                    gameInfo.actions.newGame();
                                }} variant="contained">Новая игра</Button>
                    </ModalComponent>
                </div>
            }
            <BoardComponent
                game={gameInfo.game}
                canMoveCard={gameInfo.actions.canMoveCard}
                moveCard={gameInfo.actions.moveCard}
                showDeckCard={gameInfo.actions.showDeckCard}/>
            <GameInfoComponent
                seconds={gameInfo.timer.seconds}
                minutes={gameInfo.timer.minutes}
                hours={gameInfo.timer.hours}
                movesCount={gameInfo.movesCount}
                newGame={gameInfo.actions.newGame}
                restartGame={gameInfo.actions.restartGame}/>
        </Container>
    );
};

export default GameComponent;