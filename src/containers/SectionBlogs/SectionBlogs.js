import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";

const BlogPage = () => {
    return (
        <MDBCardBody className="text-center">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Recent posts
            </h2>
            <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4" waves>
                        <img
                            className="img-fluid"
                            src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/19/15196afa-4329-45a6-9f81-1a7cd8ea0102/1303052894.jpg?width=1350&height=759"
                            alt=""
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <h4 className="font-weight-bold mb-3">
                        <strong>Gameweek 24: captaincy</strong>
                    </h4>
                    <p className="bold">
                        Date: 15/07/2018
                    </p>
                    <p className="dark-grey-text">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque
                        nihil impedit quo minus id quod maxime placeat facere possimus
                        voluptas.
                    </p>
                    <MDBBtn color="deep-orange" rounded size="md">
                        Read more
                    </MDBBtn>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4" waves>
                        <img
                            className="img-fluid"
                            src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/20/6e9d1ed2-b3ac-49b6-9d00-1451da6e5d93/2021-02-20T125542Z_537649482_UP1EH2K0ZWUDT_RTRMADP_3_SOCCER-ENGLAND-SOU-CHE-REPORT.JPG?width=1350&height=759"
                            alt=""
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>

                    <h4 className="font-weight-bold mb-3">
                        <strong>Best defender picks</strong>
                    </h4>
                    <p>
                        Date: 13/07/2018
                    </p>
                    <p className="dark-grey-text">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis voluptatum deleniti atque corrupti quos dolores.
                    </p>
                    <MDBBtn color="deep-orange" rounded size="md">
                        Read more
                    </MDBBtn>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4" waves>
                        <img
                            className="img-fluid"
                            src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/20/2eb8504f-5e95-4537-87b3-a09db8b78d39/2021-02-20T164356Z_1600966462_UP1EH2K1AH8SG_RTRMADP_3_SOCCER-ENGLAND-BUR-WBA-REPORT.JPG?width=1350&height=759"
                            alt=""
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>

                    <h4 className="font-weight-bold mb-3">
                        <strong>Pope replacement</strong>
                    </h4>
                    <p>
                        Date: 11/07/2018
                    </p>
                    <p className="dark-grey-text">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui ratione.
                    </p>
                    <MDBBtn color="deep-orange" rounded size="md">
                        Read more
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
    );
}

export default BlogPage;