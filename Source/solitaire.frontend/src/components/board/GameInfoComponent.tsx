import React, {FC} from 'react';
import styles from "./GameInfoComponent.module.css";
import {Button} from "@mui/material";

type GameInfoComponentProps = {
    movesCount : number,
    newGame : () => void,
    restartGame : () => void
}

const GameInfoComponent : FC<GameInfoComponentProps> = ({movesCount, newGame, restartGame}) => {
    return (
        <div className={styles.gameInfo}>
            <div className={styles.gameInfo__stats}>
                <div className={styles.gameInfo__item}>Время: 4:51</div>
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