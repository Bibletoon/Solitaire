import React from 'react';
import styled from "styled-components";

const EmptyCardBlock = styled.div`
  color: black;
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
  opacity: 0.3;

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
const EmptyCardComponent = () => {
    return (
        <EmptyCardBlock>
            <span>
                {"\u{1F0DF}"}
            </span>
        </EmptyCardBlock>
    );
};

export default EmptyCardComponent;