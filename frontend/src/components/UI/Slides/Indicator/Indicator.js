import React from "react";
import classes from "./Indicator.module.css";

const Indicator = (props) => {
    const { selected, payload, type } = props;
    const select = `${classes.bubble}+' '+ ${classes.selected}`;
    const content = payload.map((element) => {
        return (
            <div
                key={element.id}
                className={selected === element.id ? select : classes.bubble}
            ></div>
        );
    });

    let mainClass;
    switch (type) {
        case "images":
            mainClass = classes.container;
            break;
        case "texts":
            mainClass = classes.containerText;
            break;
        case "svg":
            mainClass = classes.containerSvg;
            break;
        default:
            console.log("wrong value of Type!");
    }

    return <div className={mainClass}>{content}</div>;
};

export default Indicator;
