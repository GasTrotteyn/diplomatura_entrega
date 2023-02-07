import React from "react";
import { withRouter } from "react-router-dom";
import Partners from "../containers/Partners/Partners";
import Footer from "../containers/Footer/Footer";

const Layout = (props) => {
    return (
        <React.Fragment>
            {props.children}
            {props.location.pathname === "/contact" ||
            props.location.pathname === "/preConversion" ? null : (
                <Partners></Partners>
            )}
            <Footer></Footer>
        </React.Fragment>
    );
};

export default withRouter(Layout);
