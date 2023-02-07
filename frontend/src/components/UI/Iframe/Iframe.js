import React from "react";
import classes from "./Iframe.module.css";

const Iframe = (props) => {
    return (
        <div className={classes.container}>
            <iframe
                title="Digital Nomad Van Life Tour"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Zv6B8gi2uHs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Iframe;
