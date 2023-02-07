import React, { useState } from "react";
import classes from "./ConversionOptions.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import oldWest from "../../Assests/optimized/banner-conversion.jpg";
import BasicKit from "../../containers/Kits/BasicKit/BasicKit";
import FullKit from "../../containers/Kits/FullKit/fullKit";

const Conversions = (props) => {
    const [option, setOption] = useState("basic");

    const setFull = () => {
        setOption("full");
    };

    const setBasic = () => {
        setOption("basic");
    };

    let content = <BasicKit clicked={setFull}></BasicKit>;

    if (option === "full") {
        content = <FullKit clicked={setBasic}></FullKit>;
    }

    return (
        <div className={classes.container}>
            <Header
                background={oldWest}
                alt="old west photo"
                flag="CONVERSION KITS"
                title="Build Your Dream Van"
            ></Header>
            {content}
            <Cta></Cta>
        </div>
    );
};

export default Conversions;
