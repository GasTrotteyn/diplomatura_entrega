import React from "react";
import HeaderHome from "../Headers/HeaderHome/HeaderHome";
import Carousel from "../Carousel/Carousel";
import RightPiece from "../../components/Pieces/RightPiece/RightPiece";
import LeftPiece from "../../components/Pieces/LeftPiece/LeftPiece";
import window from "../../Assests/optimized/img-home-about.jpg";
import ConversionOptions from "../ConversionsOptions/ConversionsOptions";
import Video from "../../components/Video/Video";
import ceramics from "../../Assests/optimized/tiles_final.jpg";
import ceramicIcon from "../../Assests/optimized/bg-icon-decor.png";
import bedIcon from "../../Assests/optimized/bg-icon-foot.png";
import bedExtension from "../../Assests/optimized/BedExtensionFinal.jpg";
import HomeGallery from "../Gallery/HomeGallery/HomeGallery";
import FaqsTestIcon from "../FaqsTestimonialsAndIcons/FaqsTestIcon";
import Iframe from "../../components/UI/Iframe/Iframe";
import CookieConsent from "react-cookie-consent";

const Home = (props) => {
    return (
        <React.Fragment>
            <CookieConsent>
                This website uses cookies to enhance the user experience.
            </CookieConsent>
            <HeaderHome></HeaderHome>
            <Carousel></Carousel>
            <RightPiece
                flag="WHAT WE DO"
                title="We build your dream van"
                paragraph1="Van conversions, uniquely designed and built using sustainably sourced wood, ceramics, metal, and old world craftsmanship."
                srcPhoto={window}
                photoOnlyDesktop
                altPhoto="kitchen window with a river"
                btnMessage="about us"
                path="/aboutUs"
            ></RightPiece>
            <Video></Video>
            <ConversionOptions></ConversionOptions>
            <LeftPiece
                flag="MATERIALS"
                title="Custom ceramic tiles & knobs"
                srcIcon={ceramicIcon}
                altIcon="ceramic icon"
                paragraph1="Hand painted custom tiles and knobs from Guanajuato, Mexico."
                paragraph2="Option for leather drawer pulls available as well."
                srcPhoto={ceramics}
                altPhoto="handmade ceramics"
                btnMessage="gallery"
                path="/gallery"
            ></LeftPiece>
            <RightPiece
                flag="BED EXTENSION"
                title="Extend your beed to sleep more comfortably"
                srcIcon={bedIcon}
                altIcon="bed icon"
                paragraph1="Flarespace bed extensions will provide you with the extra inches needed to lay down and sleep comfortably in the width of your van, freeing up a lot of space."
                paragraph2=" What will you do with more space inside your van?"
                srcPhoto={bedExtension}
                altPhoto="bed extension"
                btnMessage="gallery"
                path="/gallery"
            ></RightPiece>
            <HomeGallery></HomeGallery>
            <FaqsTestIcon></FaqsTestIcon>
            <Iframe></Iframe>
        </React.Fragment>
    );
};

export default Home;
