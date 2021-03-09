import React from "react";

import Header from "../../components/Banner/Banner";
import SectionBlogs from "../SectionBlogs/SectionBlogs";
import Features from "../SectionFeatures/SectionFeatures";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return <React.Fragment>
        <Header></Header>
        <SectionBlogs></SectionBlogs>
        <Features></Features>
        <Footer></Footer>
    </React.Fragment>
}

export default Home;