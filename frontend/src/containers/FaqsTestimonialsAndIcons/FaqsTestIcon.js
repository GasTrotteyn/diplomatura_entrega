import React from "react";
import classes from "./FaqsTestIcon.module.css";
import Faqs from "./Faqs/Faqs";
import Testimonials from "./Testimonials/Testimonials";
import IconSection from "../../components/IconsSection/IconsSection";
import iconClock from "../../Assests/optimized/icon-clock.svg";
import iconShield from "../../Assests/optimized/icon-shield.svg";
import iconSolarPanel from "../../Assests/optimized/icon-solarpanel.svg";
import iconBattery from "../../Assests/optimized/icon-battery.svg";

const FaqsTestIcon = (props) => {
    const icons = [
        {
            id: 1,
            title: "Fast Conversion",
            subtitles: ["60 days for basics 90 days for full *"],
            src: iconClock,
        },
        {
            id: 2,
            title: "Off-grid solar power",
            subtitles: ["from 460 watts onwards"],
            src: iconSolarPanel,
        },
        {
            id: 3,
            title: "Lithium battery",
            subtitles: ["from 200 ah."],
            src: iconBattery,
        },
        {
            id: 4,
            title: "Feel Safe",
            subtitles: ["1 year warranty"],
            src: iconShield,
        },
    ];

    return (
        <div className={classes.container}>
            <Faqs></Faqs>
            <div className={classes.testIcons}>
                <Testimonials></Testimonials>
                <IconSection payload={icons}></IconSection>
            </div>
        </div>
    );
};

export default FaqsTestIcon;
