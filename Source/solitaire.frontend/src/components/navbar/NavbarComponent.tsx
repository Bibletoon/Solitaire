import React, {FC} from 'react';
import styles from "./Navbar.module.css"

const NavbarComponent : FC = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.navbar__brand}>
                <img src="https://cdn-icons-png.flaticon.com/512/1687/1687631.png" alt="" className={styles.navbar__icon}/>
                <span className={styles.navbar__title}>Solitaire</span>
            </a>
            <a className={styles.navbar__profile}>
                <img src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" alt="" className={styles.navbar__avatar}/>
                <span>Bibletoon</span>
            </a>
        </nav>
    );
};

export default NavbarComponent;