import React from "react";
import classes from "./GalleryModal.module.css";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
import { Link } from "react-router-dom";
import Slides from "../../../components/UI/Slides/Slides";
import galMod1 from "../../../Assests/optimized/galMod1.jpg";
import galMod2 from "../../../Assests/optimized/galMod2.jpg";
import galMod3 from "../../../Assests/optimized/galMod3.jpg";
import galMod4 from "../../../Assests/optimized/galMod4.jpg";
import galMod5 from "../../../Assests/optimized/galMod5.jpeg";
import galMod6 from "../../../Assests/optimized/galMod6.jpg";
import galMod7 from "../../../Assests/optimized/galMod7.jpg";
import galMod8 from "../../../Assests/optimized/galMod8.jpg";
import galMod9 from "../../../Assests/optimized/galMod9.jpg";
import galMod10 from "../../../Assests/optimized/galMod10.jpeg";
import galMod11 from "../../../Assests/optimized/galMod11.jpeg";
import galMod12 from "../../../Assests/optimized/galMod12.jpg";
import galMod13 from "../../../Assests/optimized/galMod13.jpg";
import galMod14 from "../../../Assests/optimized/galMod14.jpg";
import galMod15 from "../../../Assests/optimized/galMod15.jpeg";
import galMod16 from "../../../Assests/optimized/galMod16.jpeg";
import galMod17 from "../../../Assests/optimized/galMod17.jpeg";
import galMod18 from "../../../Assests/optimized/galMod18.jpeg";

const GalleryModal = (props) => {
    const payload = [
        { id: 1, photo: galMod1, alt: "van in the desert" },
        { id: 2, photo: galMod2, alt: "van with rainbow" },
        { id: 3, photo: galMod3, alt: "van in the mountains" },
        { id: 4, photo: galMod4, alt: "wooden countertop" },
        { id: 5, photo: galMod5, alt: "woman drinking coffee inside a van" },
        { id: 6, photo: galMod6, alt: "someone cooking inside the van" },
        { id: 7, photo: galMod7, alt: "van on the meadow" },
        { id: 8, photo: galMod8, alt: "van in the desert" },
        { id: 9, photo: galMod9, alt: "van in the route" },
        { id: 10, photo: galMod10, alt: "making a stop" },
        { id: 11, photo: galMod11, alt: "roof extension" },
        { id: 12, photo: galMod12, alt: "van in the mountains" },
        { id: 13, photo: galMod13, alt: "interior of a van" },
        { id: 14, photo: galMod14, alt: "interior of a van" },
        { id: 15, photo: galMod15, alt: "interior of a van" },
        { id: 16, photo: galMod16, alt: "interior of a van" },
        { id: 17, photo: galMod17, alt: "interior of a van" },
        { id: 18, photo: galMod18, alt: "interior of a van" },
    ];

    return (
        <Backdrop show>
            <Slides payload={payload} time={5000} type={"images"}></Slides>
            <Link className={classes.button} to={"/gallery"}>
                BACK TO GALLERY
            </Link>
        </Backdrop>
    );
};

export default GalleryModal;
