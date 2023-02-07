import React from "react";
import classes from "./Carousel.module.css";
import Slides from "../../components/UI/Slides/Slides";
import van1 from "../../Assests/optimized/Home3.jpg";
import van2 from "../../Assests/optimized/Home4.jpg";
import van3 from "../../Assests/optimized/Home2.jpg";

const Carousel = (props) => {
    return (
        <div className={classes.container}>
            <Slides
                payload={[
                    { id: 1, photo: van1, alt: "van 1" },
                    { id: 2, photo: van2, alt: "van 2" },
                    { id: 3, photo: van3, alt: "van 3" },
                ]}
                time={5000}
                type={"images"}
            ></Slides>
        </div>
    );
};

export default Carousel;
