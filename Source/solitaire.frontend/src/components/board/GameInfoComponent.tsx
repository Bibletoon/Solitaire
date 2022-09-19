import React from 'react';
import styles from "./GameInfoComponent.module.css";
import {Button} from "@mui/material";

const GameInfoComponent = () => {
    return (
        <div className={styles.gameInfo}>
            <div className={styles.gameInfo__stats}>
                <div className={styles.gameInfo__item}>Время: 4:51</div>
                <div className={styles.gameInfo__item}>Ходы: 125</div>
            </div>
            <div className={styles.gameInfo__buttons}>
                <Button variant="contained">Начать сначала</Button>
                <Button variant="contained">Новая игра</Button>
                <Button variant="contained">Правила</Button>
            </div>
        </div>
    );
};

export default GameInfoComponent;