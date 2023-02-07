import React from "react";
import classes from "./Button.module.css";
import arrowRight from "../../../Assests/optimized/icon-arrow2.svg";
import arrowRightWhite from "../../../Assests/optimized/icon-arrow-white.svg";
import { Link } from "react-router-dom";
import iconPlay from "../../../Assests/optimized/icon-play.svg";

const Button = (props) => {
    const { transparent, path, children, forVideo } = props;
    const arrowForTransparent = (
        <div>
            <img
                className={classes.arrowForTransparentGrey}
                src={arrowRight}
                alt="arrow right"
            ></img>
            <img
                className={classes.arrowForTransparentWhite}
                src={arrowRightWhite}
                alt="arrow right"
            ></img>
        </div>
    );

    let arrow = (
        <img className={classes.arrow} src={arrowRight} alt="arrow right"></img>
    );

    if (transparent) {
        arrow = arrowForTransparent;
    }

    if (forVideo) {
        arrow = null;
    }

    const classesArray = [
        classes.Button,
        transparent ? classes.transparent : null,
    ].join(" ");

    return (
        <div className={classesArray}>
            <Link to={path}>
                {forVideo ? (
                    <img
                        className={classes.playIcon}
                        src={iconPlay}
                        alt={"Play icon"}
                    ></img>
                ) : null}
                {children}
                {arrow}
            </Link>
        </div>
    );
};

export default Button;
