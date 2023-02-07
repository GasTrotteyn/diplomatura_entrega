import React from "react";
import classes from "./FullKit.module.css";
import IconSection from "../../../components/IconsSection/IconsSection";
import iconClock from "../../../Assests/optimized/icon-clock.svg";
import iconSolarPanel from "../../../Assests/optimized/icon-solarpanel.svg";
import iconStove from "../../../Assests/optimized/icon-stove.svg";
import shower from "../../../Assests/optimized/icon-shower.svg";
import table from "../../../Assests/optimized/icon-table.svg";

import RightPiece from "../../../components/Pieces/RightPiece/RightPiece";
import iconCaravan from "../../../Assests/optimized/bg-icon-caravan.png";
import imgFullConversion from "../../../Assests/optimized/img-full-conversion.png";

import LeftPiece from "../../../components/Pieces/LeftPiece/LeftPiece";
import iconKitchen from "../../../Assests/optimized/bg-icon-kitchen.png";
import imgFullConversion2 from "../../../Assests/optimized/img-full-conversion2.jpeg";
import iconDuck from "../../../Assests/optimized/bg-icon-duck.png";
import imgFullConversion3 from "../../../Assests/optimized/img-full-conversion3.jpg";

import iconInterior from "../../../Assests/optimized/icon-interior.svg";
import iconShower from "../../../Assests/optimized/icon-shower.svg";
import iconExterior from "../../../Assests/optimized/icon-exterior.svg";
import iconStove2 from "../../../Assests/optimized/icon-stove2.svg";

import WeBuild from "../../../components/WeBuild/WeBuild";

import MoreAdds from "../../../components/MoreAdds/MoreAdds";

const BasicKit = (props) => {
    const { clicked } = props;

    const icons1 = [
        {
            id: 1,
            title: "Fast Conversion",
            subtitles: ["90 days"],
            src: iconClock,
        },
        {
            id: 2,
            title: "Energy & heater",
            subtitles: ["480w Solar Panels & Evo 40 Webasto"],
            src: iconSolarPanel,
        },
        {
            id: 3,
            title: "Kitchen",
            subtitles: ["Stove, Fridge and Sink"],
            src: iconStove,
        },
        {
            id: 4,
            title: "Bathroom",
            subtitles: ["Shower Seat & Water System"],
            src: shower,
        },
        {
            id: 5,
            title: "Full interior",
            subtitles: ["Cabinets, Table & Bed"],
            src: table,
        },
    ];

    const icons2 = [
        {
            id: 1,
            title: "Interior",
            subtitles: [
                "Knobs/Latches",
                "2 Cabinets",
                "Table",
                "Bed Frame",
                "Custom Mattress",
                "Hardwood Table",
            ],
            src: iconInterior,
        },
        {
            id: 2,
            title: "Kitchen",
            subtitles: [
                "2 Burner Stove",
                "Fridge",
                "Hardwood countertop",
                "Artisan Tiles",
                "Sink & faucet",
            ],
            src: iconStove2,
        },
        {
            id: 3,
            title: "Bathroom",
            subtitles: [
                "Shower seat",
                "Water Pump",
                "Water Tank",
                "Porta Potty",
                "Grey water tank",
            ],
            src: iconShower,
        },
        {
            id: 4,
            title: "Extras",
            subtitles: [
                "Propane Instant Water Heater",
                "Websato Evo 40 Heater",
                "Propane System",
                "2 Swivel Bases for Chairs",
                "2000W Inverter",
                "2 outlet 110v.",
            ],
            src: iconExterior,
        },
    ];

    return (
        <div className={classes.container}>
            <div className={classes.kitSelector}>
                <div className={classes.buttons}>
                    <div className={classes.buttonGrey} onClick={clicked}>
                        Basic Conversion
                    </div>
                    <div className={classes.title}>Full Conversion</div>
                </div>
            </div>
            <div className={classes.price}>Price: $36,000</div>
            <IconSection payload={icons1} oneLine></IconSection>
            <RightPiece
                flag="FULL CONVERSION PACKAGE"
                title="Travel with the comforts of home"
                srcIcon={iconCaravan}
                altIcon="van traveling"
                paragraph1="Our Full Custom Van Conversion combines the basic conversion package with all recommended add-on accessories to make your custom van the perfect fit."
                paragraph2="This package includes a complete kitchen, dining area, heating, plumbing and bath setup. A Full Conversion is great for off-grid traveling or casual weekend excursions."
                srcPhoto={imgFullConversion}
                altPhoto="interior of a van"
                noButton
            ></RightPiece>
            <LeftPiece
                flag="FULL KITCHEN"
                title="Home cooking doesn’t end on the road"
                srcIcon={iconKitchen}
                altIcon="kitchen icon"
                paragraph1="Our full kitchen galley includes a 2 burner stove or a stove/oven combo upgrade. Your customized hardwood countertop gives you ample prep space,  complete with a cutting board sink cover and kitchen storage underneath."
                paragraph2=" Keep your produce and creature comforts cool in the fridge."
                srcPhoto={imgFullConversion2}
                altPhoto="complete kitchen"
                noButton
            ></LeftPiece>
            <RightPiece
                flag="BATHROOM"
                title="Instant hot water and one-of-a-kind shower seat"
                srcIcon={iconDuck}
                altIcon="Rubber duck icon"
                paragraph1=" PataVans signature shower seat maximizes space in your van. When not in use, this gives you seating for your dining area or workspace. To use the shower seat, pop open the top and you will find a tub to stand in and a shower handle to hang. Use magnets and a shower curtain to make a stand up shower."
                paragraph2=" Our propane system and water heater give you instant hot water to clean up after the day’s adventures."
                srcPhoto={imgFullConversion3}
                altPhoto="Shower seat"
                btnMessage={"View Video"}
                path={"/videoShower"}
                buttonForVideo
            ></RightPiece>
            <IconSection
                withBackground
                oneLine
                title={"What a Full Conversion includes"}
                subtitle={"Everithing in your basic conversion, plus:"}
                payload={icons2}
            ></IconSection>
            <WeBuild></WeBuild>
            <MoreAdds title={"All add-ons"}></MoreAdds>
        </div>
    );
};

export default BasicKit;
