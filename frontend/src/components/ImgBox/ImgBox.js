import React from "react";
import classes from "./ImgBox.module.css";

const ImgBox = (props) => {
    return (
        <div className={classes.container}>
            <img
                src={props.src}
                alt={props.title}
                className={classes.photo}
            ></img>
            <p className={classes.title}>{props.title}</p>
        </div>
    );
};

export default ImgBox;
