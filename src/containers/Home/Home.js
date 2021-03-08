import React from "react";

import Header from "../../components/Banner/Banner";
import SectionBlogs from "../SectionBlogs/SectionBlogs";
import Features from "../SectionFeatures/SectionFeatures";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {

    return <React.Fragment>
        <Navbar></Navbar>
        <Header></Header>
        <SectionBlogs></SectionBlogs>
        <Features></Features>
        <Footer></Footer>
    </React.Fragment>
}

export default Home;