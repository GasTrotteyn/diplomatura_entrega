import React from "react";
import classes from "./Header.module.css";
import Nav from "../../Navigation/Nav/Nav";

const Header = (props) => {
    const { title, background, flag, alt } = props;

    return (
        <div className={classes.container}>
            <Nav></Nav>
            <img
                src={background}
                className={classes.background}
                alt={alt}
            ></img>
            <div className={classes.texts}>
                <p className={classes.flag}>{flag}</p>
                <h1 className={classes.title}>{title}</h1>
            </div>
        </div>
    );
};

export default Header;
