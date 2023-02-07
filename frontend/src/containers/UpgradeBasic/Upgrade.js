import React from "react";
import classes from "./Upgrade.module.css";
import shower from "../../Assests/optimized/img-upgrade-shower.png";
import kitchen from "../../Assests/optimized/img-upgrade-kitchen.png";
import window from "../../Assests/optimized/img-upgrade-windows.png";
import seats from "../../Assests/optimized/img-upgrade-swivel.png";
import ventilation from "../../Assests/optimized/WebastoEvo40.jpg";
import Box from "../../components/ImgBox/ImgBox";

const Upgrade = (props) => {
    const boxesArray = [
        { id: 1, src: shower, title: "Shower & Water Tank" },
        { id: 2, src: kitchen, title: "Kitchen & Cabinetry" },
        { id: 3, src: window, title: "Windows" },
        { id: 4, src: seats, title: "Swivel Base Driver and Passenger Seats" },
        {
            id: 5,
            src: ventilation,
            title: "Heating Upgrades GAS / diesel",
        },
    ];

    const boxes = boxesArray.map((box) => (
        <Box key={box.id} src={box.src} title={box.title}></Box>
    ));
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>
                Upgrade your Basic Conversion package with these add ons
            </h2>
            <div className={classes.mobile}>{boxes}</div>
            <div className={classes.desktop}>
                <div className={classes.photoStrip}>
                    <img src={shower} alt={"shower"}></img>
                    <img src={kitchen} alt={"kitchen"}></img>
                    <img src={window} alt={"window"}></img>
                </div>
                <div className={classes.titlesStrip}>
                    <p>Shower & Water Tank</p>
                    <p>Kitchen & Cabinetry</p>
                    <p>Windows</p>
                </div>
                <div className={classes.photoStrip}>
                    <img src={seats} alt={"seats"}></img>
                    <img src={ventilation} alt={"ventilation"}></img>
                </div>
                <div className={classes.titlesStrip}>
                    <p>Swivel Base Driver and Passenger Seats</p>
                    <p>Heating Upgrades GAS / diesel</p>
                </div>
            </div>
        </div>
    );
};

export default Upgrade;
