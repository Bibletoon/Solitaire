import React, {FC} from 'react';
import styles from "./GameInfoComponent.module.css";
import {Button} from "@mui/material";

type GameInfoComponentProps = {
    seconds : number,
    minutes : number,
    hours : number,
    movesCount : number,
    newGame : () => void,
    restartGame : () => void
}

const GameInfoComponent : FC<GameInfoComponentProps> = ({seconds, minutes, hours, movesCount, newGame, restartGame}) => {
    return (
        <div className={styles.gameInfo}>
            <div className={styles.gameInfo__stats}>
                <div className={styles.gameInfo__item}>Время: {hours}:{minutes}:{seconds}</div>
                <div className={styles.gameInfo__item}>Ходы: {movesCount}</div>
            </div>
            <div className={styles.gameInfo__buttons}>
                <Button onClick={restartGame} variant="contained">Начать сначала</Button>
                <Button onClick={newGame} variant="contained">Новая игра</Button>
                <Button variant="contained">Правила</Button>
            </div>
        </div>
    );
};

export default GameInfoComponent;