import React from "react";
import classes from "./Testimonials.module.css";
import Slides from "../../../components/UI/Slides/Slides";
import backTestimonials from "../../../Assests/optimized/bg-testimonial.svg";

const Testimonials = (props) => {
    const list = [
        {
            id: 1,
            content: `Pata and his team did a beautiful job converting my 144' Sprinter. They were both personable and professional and so willing to work with me to make my dream van come true. I had talked to dozens of other companies who said what I wanted to do wouldn't be possible for them or were going to charge me 2x the price. I would highly recommend going with PataVans, you will not be disappointed!`,
            signature: "~Teba Saleh, from Ohio. *****",
        },
        {
            id: 2,
            content:
                "Patavans is the best place to have a custom van conversion in Colorado! Pata is extremely detailed oriented - the custom woodwork is outstanding. He also works closely with you to build the van that best fits your needs (other places offer templates that are hard to customize). If you're considering having a van built out, this is the spot!",
            signature: "~ Mark Rivera, from Colorado *****",
        },
        {
            id: 3,
            content:
                "Pata is very caring and wants everything to be just right. When things came up that I was wanting to be different, Pata heard my concerns, was very accommodating and always worked hard to make it exactly right. If I were to do it all over again, I would most definitely chose Pata to build my custom van no question about it. You won't find anyone who cares more about your van build.",
            signature: "~Lauren CT, from Florida *****",
        },
        {
            id: 4,
            content:
                "Pata Vans does INCREDIBLE WORK!!! He and his team converted our van one year ago and we have been living in it full time! It is amazing to truly be able to have your home wherever you go. Highly recommend choosing Pata if you are even close to thinking about building a van conversion. Thank you Pata.",
            signature: "~Marcos Rosenkjer, from Utah *****",
        },
    ];
    return (
        <div className={classes.container}>
            <div>
                <h4 className={classes.flag}>TESTIMONIALS</h4>
                <h2 className={classes.title}>Our happy campers!</h2>
            </div>
            <img
                className={classes.background}
                src={backTestimonials}
                alt={"testimonial decoration"}
            ></img>
            <div className={classes.slides}>
                <Slides payload={list} time={15000} type={"texts"}></Slides>
            </div>
        </div>
    );
};

export default Testimonials;
