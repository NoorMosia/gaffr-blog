import React from "react";
import * as Styles from "./Banner.module.css";

// import banner from "./banner.jpg"

const Banner = () => {
    return (
        <div className={Styles.Banner}>
            {/* <img src={banner} alt="banner" /> */}
            <div className={Styles.BannerText}>
                <h2>Top blogs for you</h2>
                <p>
                    be up to date with the latest championship
                    fantasy news through our blogs.
                </p>
            </div>
        </div>
    )
}

export default Banner;
