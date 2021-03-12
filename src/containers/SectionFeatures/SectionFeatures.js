import React from "react";
import * as Styles from "./SectionFeatures.module.css";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
    return (
        <section className={`text-center my-5" + ${Styles.Features}`}>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Features
            </h2>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="book" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Latest news</h5>
                    <p className=" mb-md-0 mb-5">
                        Keeping up with the gameweeks can be a hassle.
                        We will keep you up to date with player form, injuries
                        through our blog posts.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="users" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Expert tips</h5>
                    <p className=" mb-md-0 mb-5">
                        Need a nudge on player picks. Our blog writers will
                        keep you up to speed with players that could score good
                        in the coming weeks.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon far icon="user" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">Captaincy Picks</h5>
                    <p className=" mb-md-0 mb-5">
                        Picking a captain is probably the most important part of fantasy
                        football. We will have weekly blog posts on which players are best
                        captaincy options.
                    </p>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default FeaturesPage;