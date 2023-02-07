import React from "react";
import classes from "./VideoShower.module.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import { Link } from "react-router-dom";
import source from "../../Assests/optimized/ShowerSeatOK.mp4";

const VideoShower = (props) => {
    return (
        <Link to="./conversions">
            <Backdrop show>
                <video
                    className={classes.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={source} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
            </Backdrop>
        </Link>
    );
};

export default VideoShower;
