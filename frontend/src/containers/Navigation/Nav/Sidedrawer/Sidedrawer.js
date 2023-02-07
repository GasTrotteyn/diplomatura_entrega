import React from "react";
import classes from "./Sidedrawer.module.css";
import iconClose from "../../../../Assests/optimized/icon-closed-w.svg";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
    const { show, clicked } = props;

    const navItems = [
        { title: "HOME", path: "/" },
        { title: "CONVERSIONS", path: "/conversions" },
        { title: "GALLERY", path: "/gallery" },
        { title: "ABOUT US", path: "/aboutUs" },
        { title: "CONTACT", path: "/contact" },
    ];

    const content = navItems.map((item) => {
        return (
            <li
                key={item.title}
                className={classes.navItem}
                onClick={clicked}
                style={{
                    fontFamily: "Gilroy-Bold ☞",
                    fontWeight: "light",
                }}
            >
                <Link
                    style={{
                        fontFamily: "Gilroy-Bold ☞",
                        fontWeight: "light",
                    }}
                    to={item.path}
                >
                    {item.title}
                </Link>
            </li>
        );
    });

    const classesArray = [
        classes.container,
        show ? classes.show : classes.out,
    ].join(" ");
    const classesCross = [classes.navItem, !show ? classes.noCross : null].join(
        " "
    );

    return (
        <div className={classesArray} onClick={clicked}>
            <ul className={classes.navItems}>
                <div className={classesCross} onClick={clicked}>
                    <img src={iconClose} alt="icon close"></img>
                </div>
                {content}
            </ul>
        </div>
    );
};

export default SideDrawer;
