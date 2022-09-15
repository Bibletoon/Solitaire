import React, {FC} from 'react';
import styles from "./Navbar.module.css"
import {AccountCircle} from "@mui/icons-material";


const NavbarComponent : FC = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.navbar__brand}>
                <img src="https://cdn-icons-png.flaticon.com/512/8037/8037108.png" alt="" className={styles.navbar__icon}/>
                <span className={styles.navbar__title}>Solitaire</span>
            </a>
            <a className={styles.navbar__profile}>
                <AccountCircle fontSize="large"/>
                <span>Bibletoon</span>
            </a>
        </nav>
    );
};

export default NavbarComponent;