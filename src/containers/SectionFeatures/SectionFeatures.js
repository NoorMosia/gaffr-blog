import React from "react";
import * as Styles from "./SectionFeatures.module.css";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
    return (
        <section className={`text-center my-5" + ${Styles.Features}`}>
            <h2 className={Styles.Header}>
                Features
            </h2>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="book" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Latest news</h5>
                    <p className=" mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="users" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Expert tips</h5>
                    <p className=" mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon far icon="user" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">Captaincy Picks</h5>
                    <p className=" mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default FeaturesPage;