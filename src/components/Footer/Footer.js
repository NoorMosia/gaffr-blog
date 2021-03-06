import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="black">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Noor Tshepo Mosia </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;