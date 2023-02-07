import React from "react";
import classes from "./WeBuild.module.css";
import arrowRightWhite from "../../Assests/optimized/icon-arrow-white.svg";
import { Link } from "react-router-dom";

const WeBuild = (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>
                We've built hundreds of dream vans for our customers.
                <br></br>
                Explore our gallery and start dreaming.
            </p>
            <Link to={"/gallery"} className={classes.button}>
                {" "}
                View full gallery{" "}
                <img src={arrowRightWhite} alt={"arrow icon"}></img>
            </Link>
        </div>
    );
};

export default WeBuild;
