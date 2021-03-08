import React from "react";
import * as Styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={Styles.Header}>
            <div className={Styles.TextContainer}>
                <h1>Gaffr.io</h1>
                <p>Your number 1 fantasy championship blog.</p>
            </div>
        </header>
    )
}

export default Header;