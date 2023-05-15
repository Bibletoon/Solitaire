import React from 'react';
import BoardComponent from "../board/BoardComponent";
import GameInfoComponent from "../board/GameInfoComponent";
import useGame from "../../hooks/UseGame";
import Container from "../layout/Container";
import {Box, Button, Modal, Typography} from "@mui/material";
import Fireworks from "@fireworks-js/react";
import styles from '../ModalComponent.module.css';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

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
                    <Modal open={gameEnded}>
                        <Box sx={modalStyle} className={styles.modal}>
                            <Typography align="center" variant={"h5"}>Ура, победа!</Typography>

                                <Button fullWidth={true} onClick={async () => {
                                    newGame();
                                }} variant="contained">Новая игра</Button>

                        </Box>
                    </Modal>
                </div>
            }
            <BoardComponent game={game} canMoveCard={canMoveCard} moveCard={moveCard} showDeckCard={showDeckCard}/>
            <GameInfoComponent seconds={seconds} minutes={minutes} hours={hours} movesCount={movesCount} newGame={newGame} restartGame={restartGame}/>
        </Container>
    );
};

export default GameComponent;