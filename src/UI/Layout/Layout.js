import React from "react";
import { Route, Switch } from "react-router-dom";

import * as Styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Home from "./../../containers/Home/Home";
import BlogListPage from "./../../containers/BlogsListPage/BlogsListPage";
import BlogPage from "./../../containers/BlogPage/BlogPage";

const Layout = () => {
    return (
        <div className={Styles.Layout}>
            <div className={Styles.Navigation}>
                <Navbar></Navbar>
            </div>

            <div className={Styles.Main}>
                <Switch>
                    <Route path="/blog/:id" component={BlogPage} />
                    <Route path="/blogs" component={BlogListPage} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </div >
    )
}

export default Layout;