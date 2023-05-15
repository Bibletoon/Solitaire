import React, {FC} from 'react';
import styles from './CardComponent.module.css';
import Card from "../../models/Card";
import {Suit} from "../../models/Suit";
import {useDrag} from "react-dnd";
import CardPosition from "../../models/CardPosition";
import styled from "styled-components";

type CardBlockProps = {
    color: 'red' | 'black';
    invisible: boolean;
}

const CardBlock = styled.div<CardBlockProps>`
  color: ${(props) => props.color};
  ${(props) => props.invisible && `
    display: none;
  `}
  background-color: white;
  height: 78px;
  font-size: 82px;
  line-height: 64px;
  cursor: pointer;
  overflow: hidden;
  font-family: "Segui Symbol", sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (min-width: 635px) {
    height: 128px;
    font-size: 134px;
    line-height: 108px;
  }


  @media (min-width: 1300px) {
    height: 158px;
    font-size: 158px;
    line-height: 124px;
  }
`;

type CardComponentProps = {
    card : Card
    canDrag? : boolean
    hidden? : boolean
    invisible? : boolean
    position : CardPosition
}

const CardComponent : FC<CardComponentProps> = ({card, invisible, hidden, position, canDrag} : CardComponentProps) => {
    const color = hidden ? 'red' : card.suit === Suit.Heart || card.suit === Suit.Diamond ? 'red' : 'black';

    const [_, drag] = useDrag(() => ({
        type: "card",
        item : (monitor) => position,
        canDrag : () => canDrag ?? true,
    }), [])

    return (
        <CardBlock ref={drag} draggable={!hidden} color={color} invisible={invisible ?? false}>{hidden ? '\u{1F0A0}' : card.toChar()}</CardBlock>
    );
};

CardComponent.defaultProps = {
    hidden : false,
    invisible: false,
    canDrag : true,
    position : undefined
};

export default CardComponent;