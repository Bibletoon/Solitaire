import React, {FC} from 'react';
import {Modal} from "@mui/material";
import styled from "styled-components";

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 26px;
  background: white;
  border: 2px solid black;
  width: 300px;

  @media (min-width: 635px) {
      width: 400px;
  }
`;

type ModalProps = {
    children: string | JSX.Element | JSX.Element[];
    open: boolean;
    onClose? : () => void;
}

const ModalComponent: FC<ModalProps> = ({children, open, onClose}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalContent>
                {children}
            </ModalContent>
        </Modal>
    );
};

export default ModalComponent;