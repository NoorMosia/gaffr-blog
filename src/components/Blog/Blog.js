import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";

const BlogPage = () => {
    return (
        <MDBRow>
            <MDBCol md="12">
                <MDBCard reverse>
                    <MDBView hover cascade waves>
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                            alt=""
                            className="img-fluid"
                        />
                        <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    <MDBCardBody cascade className="text-center">
                        <h2 className="font-weight-bold">
                            <a href="#!">Title of the news</a>
                        </h2>
                        <p>
                            Written by
                                <a href="#!">
                                <strong>Abby Madison</strong>
                            </a>
                                    , 26/08/2018
                            </p>

                    </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5">
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        praesentium voluptatum deleniti atque corrupti quos dolores et
                        quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa nemo enim ipsam voluptatem
                        quia voluptas sit qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga quidem rerum facilis est distinctio.
              </p>
                    <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque
                        nihil impedit quo minus id quod maxime placeat facere
                        possimus, omnis voluptas assumenda est, omnis dolor
                        repellendus. Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum
                        necessitatibus saepe eveniet ut et voluptates repudiandae sint
                        et molestiae non recusandae itaque earum rerum.
              </p>
                </MDBContainer>
            </MDBCol>
        </MDBRow>
    );
}

export default BlogPage;