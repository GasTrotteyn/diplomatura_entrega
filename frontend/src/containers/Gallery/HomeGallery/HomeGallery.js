import React from "react";
import classes from "./HomeGallery.module.css";
import gal1 from "../../../Assests/optimized/viewGallery1.jpg";
import gal2 from "../../../Assests/optimized/viewGallery5.jpg";
import gal3 from "../../../Assests/optimized/viewGallery2.jpg";
import gal4 from "../../../Assests/optimized/viewGallery6.jpg";
import gal5 from "../../../Assests/optimized/viewGallery3.jpg";
import gal6 from "../../../Assests/optimized/viewGallery4.jpg";
import { Link } from "react-router-dom";

const HomeGallery = (props) => {
    const photoList = [
        { src: gal1, alt: "gal1" },
        { src: gal2, alt: "gal2" },
        { src: gal3, alt: "gal3" },
        { src: gal4, alt: "gal4" },
        { src: gal5, alt: "gal5" },
        { src: gal6, alt: "gal6" },
    ];
    const content = photoList.map((photo) => (
        <img
            key={photo.alt}
            src={photo.src}
            alt={photo.alt}
            className={
                photo.alt === "gal1" || photo.alt === "gal6"
                    ? classes.longPhoto
                    : classes.photo
            }
        ></img>
    ));
    return (
        <div className={classes.container}>
            <Link to={"/gallery"} className={classes.link}>
                view full gallery
            </Link>
            <div className={classes.photos}>{content}</div>
        </div>
    );
};

export default HomeGallery;
