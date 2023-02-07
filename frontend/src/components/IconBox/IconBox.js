import React from "react";
import classes from "./IconBox.module.css";

const IconBox = (props) => {
    const { src, alt, title, subtitles, oneLine } = props;

    const subtitlesToShow = subtitles.map((subtitle) => (
        <p key={subtitle} className={classes.subtitle}>
            {subtitle}
        </p>
    ));

    const classesContainer = [
        classes.container,
        oneLine ? classes.oneLine : null,
    ].join(" ");

    return (
        <div className={classesContainer}>
            <img className={classes.icon} src={src} alt={alt}></img>
            <h4 className={classes.title}>{title}</h4>
            {subtitlesToShow}
        </div>
    );
};

export default IconBox;
