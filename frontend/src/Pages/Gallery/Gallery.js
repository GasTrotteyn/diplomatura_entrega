import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import classes from "./Gallery.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import meadow from "../../Assests/optimized/banner-gallery.jpg";
import gal1 from "../../Assests/optimized/viewGallery1.jpg";
import gal2 from "../../Assests/optimized/viewGallery2.jpg";
import gal3 from "../../Assests/optimized/viewGallery3.jpg";
import gal4 from "../../Assests/optimized/viewGallery4.jpg";
import gal5 from "../../Assests/optimized/viewGallery5.jpg";
import gal6 from "../../Assests/optimized/viewGallery6.jpg";
import gal7 from "../../Assests/optimized/Gallery1A.jpg";
import gal8 from "../../Assests/optimized/Gallery1B.jpeg";
import gal9 from "../../Assests/optimized/Gallery1C.jpg";
import gal10 from "../../Assests/optimized/Gallery1D.jpeg";
import gal11 from "../../Assests/optimized/Gallery1E.jpeg";
import gal12 from "../../Assests/optimized/Gallery1F.jpg";
import gal13 from "../../Assests/optimized/Gallery1G.jpg";
import gal14 from "../../Assests/optimized/Gallery1H.jpeg";
import gal15 from "../../Assests/optimized/Gallery1I.jpg";
import gal16 from "../../Assests/optimized/Gallery1J.jpg";
import gal17 from "../../Assests/optimized/Gallery1K.jpeg";
import gal18 from "../../Assests/optimized/Gallery1L.jpeg";

const Gallery = (props) => {
    const completeList = [
        { src: gal1, alt: "gal1", form: 1, topic: "vanLife" },
        { src: gal5, alt: "gal5", topic: "conversions" },
        { src: gal3, alt: "gal3", topic: "vanLife" },
        { src: gal4, alt: "gal4", form: 1, topic: "conversions" },
        { src: gal2, alt: "gal2", topic: "vanLife" },
        { src: gal6, alt: "gal6", topic: "conversions" },
        { src: gal7, alt: "gal7", topic: "vanLife" },
        { src: gal8, alt: "gal8", topic: "conversions" },
        { src: gal9, alt: "gal9", form: 1, topic: "vanLife" },
        { src: gal10, alt: "gal10", topic: "conversions" },
        { src: gal11, alt: "gal11", topic: "vanLife" },
        { src: gal12, alt: "gal12", form: 1, topic: "vanLife" },
        { src: gal13, alt: "gal13", topic: "conversions" },
        { src: gal14, alt: "gal14", topic: "conversions" },
        { src: gal15, alt: "gal15", topic: "vanLife" },
        { src: gal16, alt: "gal16", topic: "conversions" },
        { src: gal17, alt: "gal17", topic: "conversions" },
        { src: gal18, alt: "gal18", topic: "conversions" },
    ];
    const [perm] = useState(completeList);
    const [filter, setFilter] = useState("all");
    const [photoList, setPhotoList] = useState(completeList);
    const [appear, setAppear] = useState(classes.photos);

    const filtVanLife = useCallback(() => {
        let newList = perm.filter((img) => {
            return img.topic === "vanLife";
        });
        setPhotoList(newList);
    }, [perm]);

    const filtConversions = useCallback(() => {
        let newList = perm.filter((img) => {
            return img.topic === "conversions";
        });
        setPhotoList(newList);
    }, [perm]);

    const filtAll = useCallback(() => {
        setPhotoList(perm);
    }, [perm]);

    useEffect(() => {
        setAppear(classes.photos);
        const timer = setTimeout(() => {
            switch (filter) {
                case "vanLife":
                    filtVanLife();
                    setAppear([classes.photos, classes.appear].join(" "));
                    break;
                case "conversions":
                    filtConversions();
                    setAppear([classes.photos, classes.appear].join(" "));
                    break;
                case "all":
                    filtAll();
                    setAppear([classes.photos, classes.appear].join(" "));
                    break;
                default:
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [filtVanLife, filtConversions, filtAll, setAppear, filter]);

    const content = photoList.map((photo) => {
        let form = classes.photo;
        if (photo.form === 1) {
            form = classes.longPhoto;
        }
        if (photo.form === 2) {
            form = classes.bigPhoto;
        }
        if (filter === "vanLife" && photo.topic === "conversions") {
            form = [form, classes.disappear].join(" ");
        }
        if (filter === "conversions" && photo.topic === "vanLife") {
            form = [form, classes.disappear].join(" ");
        }

        return (
            <Link className={form} to={"/galleryModal"}>
                <img key={photo.alt} src={photo.src} alt={photo.alt}></img>
            </Link>
        );
    });
    return (
        <div className={classes.container}>
            <Header
                background={meadow}
                alt="flowery meadow"
                flag="GALLERY"
                title="Enjoy the view"
            ></Header>
            <div className={classes.buttons}>
                <p
                    className={
                        filter === "all" ? classes.active : classes.button
                    }
                    onClick={() => {
                        setFilter("all");
                    }}
                >
                    ALL
                </p>
                <p
                    className={
                        filter === "vanLife" ? classes.active : classes.button
                    }
                    onClick={() => {
                        setFilter("vanLife");
                    }}
                >
                    VAN LIFE
                </p>
                <p
                    className={
                        filter === "conversions"
                            ? classes.active
                            : classes.button
                    }
                    onClick={() => {
                        setFilter("conversions");
                    }}
                >
                    CONVERSIONS
                </p>
            </div>

            <div className={appear}>{content}</div>
            <Cta></Cta>
        </div>
    );
};

export default Gallery;
