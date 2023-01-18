import React from 'react';
import BoardComponent from "../board/BoardComponent";
import GameInfoComponent from "../board/GameInfoComponent";
import useGame from "../../hooks/UseGame";
import Container from "../layout/Container";
import {Box, Button, CircularProgress, Modal, Typography} from "@mui/material";
import Fireworks from "@fireworks-js/react";
import useAnimePicClient from "../../hooks/UseAnimePic";
import RequestState from "../../hooks/RequestState";
import styles from '../ModalComponent.module.css';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const GameComponent = () => {
    const {game, gameEnded, movesCount, seconds, minutes, hours, canMoveCard, moveCard, showDeckCard, newGame, restartGame} = useGame();
    const {picture, status, getNext} = useAnimePicClient();

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
                        <Box sx={{modalStyle}} className={styles.modal}>
                            <Typography align="center" variant={"h5"}>Ура, победа!</Typography>
                            {status == RequestState.Pending
                                ? <CircularProgress />
                                : status == RequestState.Success ?
                                <img style={{width:"100%"}} src={picture} />
                                : <Typography align="center" variant={"h6"} color={"indianred"}>Sorry Mario, your anime picture is in another castle.</Typography>
                            }
                            <Box sx={{
                                display : 'flex',
                                flexDirection : 'column',
                            }}>
                                <Button onClick={async () => {
                                    await getNext();
                                    newGame();
                                }} variant="contained">Новая игра</Button>
                            </Box>
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