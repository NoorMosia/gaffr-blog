import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <React.Fragment>
            <div className={Styles.Navbar} >
                <Link to="/" >
                    <div className={Styles.Logo}>
                        LOGO
                        {/* <img src={Logo} className="rounded" alt="aligment" /> */}
                    </div>
                </Link>
                <div className={Styles.Links}>
                    <div className={Styles.LeftLinks}>
                        {/* <div className={Styles.Categories}>
                            categories
                        </div> */}
                    </div>
                    <div className={Styles.RightLinks}>


                    </div>
                </div>
            </div>
            <div className={Styles.FakeNav} ></div>
        </React.Fragment>
    )
}

export default Navbar;