import React from "react";
import classes from "./IconsSection.module.css";
import IconBox from "../IconBox/IconBox";

const IconSection = (props) => {
    const { payload, title, withBackground, subtitle, oneLine } = props;

    const content = payload.map((icon) => {
        return (
            <IconBox
                key={icon.id}
                title={icon.title}
                src={icon.src}
                subtitles={icon.subtitles}
                oneLine={oneLine}
            ></IconBox>
        );
    });

    const classesContainer = [
        classes.container,
        withBackground ? classes.withBackground : null,
    ].join(" ");

    const classesBoxes = [
        classes.boxes,
        oneLine ? classes.boxesOneLine : null,
    ].join(" ");

    return (
        <div className={classesContainer}>
            {title ? <h2 className={classes.title}>{title}</h2> : null}
            {subtitle ? <h4 className={classes.subtitle}>{subtitle}</h4> : null}
            <div className={classesBoxes}>{content}</div>
        </div>
    );
};

export default IconSection;
