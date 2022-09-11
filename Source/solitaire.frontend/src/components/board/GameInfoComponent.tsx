import React from 'react';
import styles from "./GameInfoComponent.module.css";

const GameInfoComponent = () => {
    return (
        <div className={styles.gameInfo}>
            <div className={styles.gameInfo__stats}>
                <div className={styles.gameInfo__item}>Время: 4:51</div>
                <div className={styles.gameInfo__item}>Ходы: 125</div>
            </div>
            <div className={styles.gameInfo__buttons}>
                <button className={[styles.gameInfo__buttons, "btn"].join(" ")}>
                    <span className="btn__text">
                        Начать сначала
                    </span>
                </button>
                <button className={[styles.gameInfo__buttons, "btn"].join(" ")}>Новая игра</button>
                <button className={[styles.gameInfo__buttons, "btn"].join(" ")}>Правила</button>
            </div>
        </div>
    );
};

export default GameInfoComponent;