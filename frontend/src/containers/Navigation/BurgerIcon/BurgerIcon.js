import React from "react";
import classes from "./BurgerIcon.module.css";

const BurgerIcon = (props) => {
    const classesArray = [
        classes.BurgerIcon,
        props.hidden ? classes.hidden : null,
    ].join(" ");
    return (
        <div className={classesArray} onClick={props.clicked}>
            <div className={classes.firstLine}></div>
            <div></div>
            <div className={classes.lastLine}></div>
        </div>
    );
};

export default BurgerIcon;
