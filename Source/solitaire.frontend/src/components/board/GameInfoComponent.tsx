import React, {FC, useState} from 'react';
import styles from "./GameInfoComponent.module.css";
import {Box, Button, Modal, Typography} from "@mui/material";

type GameInfoComponentProps = {
    seconds : number,
    minutes : number,
    hours : number,
    movesCount : number,
    newGame : () => void,
    restartGame : () => void
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const GameInfoComponent : FC<GameInfoComponentProps> = ({seconds, minutes, hours, movesCount, newGame, restartGame}) => {
    const [modalIsOpen, setOpen] = useState(false);
    const bestScore = localStorage.getItem("bestScore");
    const bestTime = localStorage.getItem("bestTime");
    const bestTimeString = bestTime ? Math.floor(parseInt(bestTime) / 3600) + ":" + Math.floor((parseInt(bestTime) % 3600) / 60) + ":" + (parseInt(bestTime) % 3600) % 60 : "Нет";

    return (
        <div className={styles.gameInfo}>
            <Modal open={modalIsOpen} onClose={() => setOpen(false)}>
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Правила пасьянса «Косынка»
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Typography component={"span"} variant="body1">На игровом поле расположено 52 карты:</Typography>
                        <br/>
                        <ul>
                            <li>Первая часть из них расположена в раздаточной колоде, которая находится в левой верхней части поля</li>
                            <li>Вторая часть повернута рубашками вверх и расположена на семи раскладочных стопках</li>
                            <li>Оставшиеся расположены лицом к игроку и лежат поверх карт на тех же семи стопках</li>
                        </ul>
                        <br/>
                        <Typography component={"span"} variant="body1" style={{marginBottom: "10 px"}}>Также на поле справа от раздаточной колоды расположены четыре основания, на каждое из которых необходимо разложить карты одной масти от туза до кроля (первая карта - туз, вторая - двойка, третья тройка и так далее, последняя - король). Разложив все карты по "домикам", пользователь добивается выигрыша в данном раскладе</Typography>
                        <br/>
                        <Typography component={"span"} variant="body1">Всего мастей представлено четыре: черви, крести, пики, буби.</Typography>
                    </Typography>
                </Box>
            </Modal>
            <div className={styles.gameInfo__stats}>
                <div className={styles.gameInfo__item}>Время: {hours}:{minutes}:{seconds}</div>
                <div className={styles.gameInfo__item}>Ходы: {movesCount}</div>
                <div className={styles.gameInfo__item}>Лучший счёт: {bestScore || "Нет"}</div>
                <div className={styles.gameInfo__item}>Лучшее время: {bestTimeString}</div>
            </div>
            <div className={styles.gameInfo__buttons}>
                <Button onClick={restartGame} variant="contained">Начать сначала</Button>
                <Button onClick={newGame} variant="contained">Новая игра</Button>
                <Button variant="contained" onClick={() => setOpen(true)}>Правила</Button>
            </div>
        </div>
    );
};

export default GameInfoComponent;