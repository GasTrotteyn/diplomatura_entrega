import React from "react";
import classes from "./ConversionsOptions.module.css";
import interior1 from "../../Assests/optimized/thumb-basic.png";
import interior2 from "../../Assests/optimized/thumb-full.png";
import interior3 from "../../Assests/optimized/thumb-custom.png";

const Conversions = (props) => {
    const conversionsList = [
        {
            title: "BASIC",
            src: interior1,
            alt: "interior1",
            description:
                "Custom woodwork, custom cabinetry, electrical amenities, and a ventilation system will make your next excursion luxurious.",
        },
        {
            title: "FULL",
            src: interior2,
            alt: "interior2",
            description:
                "Basic Conversion plus kitchen and bathroom, water heater, fridge and propane system to make your custom van the perfect fit.",
        },

        {
            title: "CUSTOM",
            src: interior3,
            alt: "interior3",
            description:
                "Tell us about your dream VAN, we would love to hear about your vision for living the #VanLife! Please fill out our Pre-Conversion Questionnaire.",
        },
    ];
    const content = conversionsList.map((option) => {
        return (
            <div key={option.alt} className={classes.box}>
                <img
                    className={classes.photo}
                    src={option.src}
                    alt={option.alt}
                ></img>
                <h2 className={classes.boxTitle}>{option.title}</h2>
                <div className={classes.description}>{option.description}</div>
            </div>
        );
    });
    return (
        <section className={classes.container}>
            <h2 className={classes.sectionTitle}>CONVERSION PACKAGES</h2>
            <div className={classes.boxes}>{content}</div>
        </section>
    );
};

export default Conversions;
