import React, {FC} from 'react';
import styles from "./Navbar.module.css"
import {AccountCircle} from "@mui/icons-material";
import styled from "styled-components";

const NavbarBlock = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  font-size: 20px;
  color: white;
  background-color: #1976d2;
  border-bottom: lightgray solid 1px;
`;

const NavbarBrand = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavbarIcon = styled.img`
  max-width: 32px;
  max-height: 32px;
  padding: 0 5px;
`;

const NavbarTitle = styled.span`
  font-family: 'Choco cooky', sans-serif;
  font-size: 30px;
`;

const NavbarProfile = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    color: #f4f4f4;
  }
`;

const NavbarComponent : FC = () => {
    return (
        <NavbarBlock>
            <NavbarBrand>
                <NavbarIcon src="https://cdn-icons-png.flaticon.com/512/8037/8037108.png" alt=""/>
                <NavbarTitle>Solitaire</NavbarTitle>
            </NavbarBrand>
            <NavbarProfile>
                <AccountCircle fontSize="large"/>
                <span>Bibletoon</span>
            </NavbarProfile>
        </NavbarBlock>
    );
};

export default NavbarComponent;