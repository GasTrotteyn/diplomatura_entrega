import React from "react";
import classes from "./AboutUs.module.css";
import Header from "../../containers/Headers/HeaderStandard/Header";
import Cta from "../../components/Cta/Cta";
import lagoon from "../../Assests/optimized/banner-about.jpg";
import RightPiece from "../../components/Pieces/RightPiece/RightPiece";
import LeftPiece from "../../components/Pieces/LeftPiece/LeftPiece";
import pataWorking from "../../Assests/optimized/img-about.png";
import pataClimbing from "../../Assests/optimized/pata_climbing.jpeg";
import pataFlying from "../../Assests/optimized/pata_flying.jpg";
import tylyn from "../../Assests/optimized/tylyn.jpeg";
import xavi from "../../Assests/optimized/xavi1.jpg";
import moose from "../../Assests/optimized/moose.jpg";

const About = (props) => {
    return (
        <div className={classes.container}>
            <Header
                background={lagoon}
                alt="lagoon at sunset"
                flag="ABOUT PATA"
                title="Know the legend"
            ></Header>
            <RightPiece
                flag="ABOUT ME"
                title="Meet Pata"
                paragraph1="Juan Manuel Trotteyn (aka ‘Pata’) was born and raised in Mendoza, Argentina. His father introduced him to mountaineering at a young age, but he quickly fell in love with sport climbing and started competing."
                paragraph2="At 18 years, he won Nationals and shortly after started route-setting for competitions. After his very first trip to Spain, he realized that’s where he wanted to live. For twelve years, Pata was based out of Cornudella de Montsant, Cataluña, the heart of Spain’s most stunning sport climbing."
                paragraph3="He became involved in the local bolting community, establishing new routes as rebolting the classics. The last 4 years that Pata lived in Spain, he was just minutes away from climbing walls. He lived in his very own van that he built himself, which got him hooked on van conversions."
                srcPhoto={pataWorking}
                altPhoto="Pata working in a van"
                noButton
            ></RightPiece>
            <LeftPiece
                paragraph1="When he moved to the USA, there was a lot of interest from the climbing community in converted vans, so he started PataVans in the back alleyway of his house! Little by little the business grew, and he was able to upgrade from the alleyway to the extra garage space of one of his friends."
                paragraph2="Since expanding the business, Pata now has a large shop in Northglenn where he can work on several projects at once. What sets Pata and PataVans apart from other businesses is the customization of builds with a rustic feel. PataVans specializes in custom van conversions that are uniquely designed and built using sustainably sourced wood, ceramics, metal, and old world craftsmanship."
                srcPhoto={pataClimbing}
                altPhoto="Pata climbing"
                noButton
            ></LeftPiece>
            <RightPiece
                paragraph1="When you offer anything that is custom made you have to make sure the client is happy and that what you are offering is actually possible!"
                paragraph2="When Pata was getting started here, he heard from a lot of clients that it was hard to find other van conversion businesses that would sit down with them and have personal conversations to create customized projects."
                paragraph3="Taking the time to meet with his clients and developing quality customer service is what Pata prides himself on. Clients can expect phone calls, in person meetings, and photo/video updates of the conversion process."
                paragraph4="Thankfully this allows the opportunity for creativity, overcoming challenges, and creating uniquely designed vans for PataVans clients."
                paragraph5="Outside of working with clients to build their dream van, Pata is on the road living the #VanLife. Pata has a passion for flying his paramotor, rock climbing, and creating new adventures with his wife and their sweet dog Eenie."
                srcPhoto={pataFlying}
                altPhoto="Pata flying his paramotor"
                noButton
            ></RightPiece>
            <LeftPiece
                flag="I KNOW ABOUT THIS"
                title="I'm Tylyn"
                paragraph1="Tylyn was born and raised in beautiful Colorado, where a deep love and desire for adventure were nurtured. She is passionate about partner acrobatics, traveling, and being shown new experiences."
                paragraph2="She enjoys finding new hobbies and giving them a shot, no matter how silly she might look trying them. Tylyn is excited to support you on your journey of customizing and creating your very own uniquely-you adventure van!"
                srcPhoto={tylyn}
                altPhoto="Tylyn"
                noButton
            ></LeftPiece>
            <RightPiece
                flag="ME TOO"
                title="I'm Xavi"
                paragraph1="Xavi is proudly Catalan originally from outside of Barcelona. In Spain, he was a commercial diver and a rigger. Following his wife, he came to the US in 2018 and is currently enjoying US crack climbing and its burgers."
                paragraph2=" His favorite climbing place is Yosemite. Besides climbing, Xavi loves travelling, skiing, mountain biking, and baking. On his downtime, he likes to watch documentaries."
                srcPhoto={xavi}
                altPhoto="Xavi climbing"
                noButton
            ></RightPiece>
            <LeftPiece
                flag="GUESS WHAT"
                title="I'm Moose"
                paragraph1="I like to adventure outdoors, hike, skate, and when I’m not at work I’m tending to my 20 year old cat Sophie."
                paragraph2=" I have a passion for skiing and a knack for fixing cars. Stoked to be a part of the PataVans team!
                "
                srcPhoto={moose}
                altPhoto="Jhon"
                noButton
            ></LeftPiece>

            <Cta></Cta>
        </div>
    );
};

export default About;
