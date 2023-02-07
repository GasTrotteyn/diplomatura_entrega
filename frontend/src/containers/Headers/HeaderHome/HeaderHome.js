import React from "react";
import classes from "./HeaderHome.module.css";
import Nav from "../../Navigation/Nav/Nav";
import sky from "../../../Assests/optimized/bg-sky.jpg";
import lagoon from "../../../Assests/optimized/banner-about.jpg";

const Header = (props) => {
    let url = sky;

    if (props.background === "2") {
        url = lagoon;
    }

    return (
        <div className={classes.container}>
            <Nav></Nav>
            <div
                style={{
                    backgroundImage: "url(" + url + ")",
                }}
                className={classes.sky}
            ></div>
            <h1
                style={{
                    fontFamily: "Gilroy-Bold ☞",
                    fontWeight: "normal",
                }}
            >
                CUSTOM VAN CONVERSIONS.<br></br> HOME IS WHERE YOU PARK IT.
            </h1>
            <div className={classes.mountain}></div>
            <h2 className={classes.description}>
                Customize your van to fit your needs and lifestyle. Travel
                without schedules or expensive reservations, and live with ease
                in your home-on-wheels. PataVans proudly serves van lifers from all over the country.
            </h2>
        </div>
    );
};

export default Header;
