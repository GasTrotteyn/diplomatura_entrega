import React from "react";
import classes from "./Cta.module.css";
import nextAdventure from "../../Assests/optimized/bg-nextadventure.png";
import Button from "../UI/Button/Button";

const Cta = (props) => {
    return (
        <div className={classes.container}>
            <img
                className={classes.nextAdventure}
                src={nextAdventure}
                alt={"aerial view of a van"}
            ></img>
            <div className={classes.content}>
                <p className={classes.title}>Ready for your next adventure?</p>
                <p className={classes.subtitle}>
                    Take a minute to fill out our Pre-Conversion Questionaire!
                </p>
                <Button transparent path={"/preConversion"}>
                    Start
                </Button>
            </div>
        </div>
    );
};

export default Cta;
