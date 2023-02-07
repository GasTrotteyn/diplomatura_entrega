import React, { useState } from "react";
import classes from "./Faqs.module.css";
import Faq from "./Faq/Faq";
import Button from "../../../components/UI/Button/Button";

const Faqs = (props) => {
    const [faqList, setFaqList] = useState([
        {
            question:
                "WHAT IS INCLUDED IN YOUR BASIC VS FULL CONVERSION? AND HOW MUCH DO THEY COST?",
            answer: "Detailed information on the ",
            link1: "Basic Conversion here.",
            link2: "Full Conversion here.",
            answer2:
                "If you are interested in customizing your basic conversion with specific add-ons, you can find our ",
            link3: "full list here",
            clicked: false,
            id: 0,
        },
        {
            question: "WHAT KIND OF VANS CAN YOU CONVERT?",
            answer: "We deal mainly with Sprinter, Promaster, and Transit vans, however we can convert almost every type. If there is a specific kind of van you would like to convert, please list it in the Pre-Conversion Questionnaire.",
            clicked: false,
            id: 1,
        },
        {
            question: "WHAT IS THE AVERAGE TIMELINE FOR MY VAN BUILD?",
            answer: "The basic conversion takes approximately 60 days. Full conversions generally take approximately 90 days, depending on the specific requested build.",
            clicked: false,
            id: 2,
        },
        {
            question: "DO YOU SELL VANS?",
            answer: "Unfortunately, we do not supply the vans ourselves, we only do conversions.",
            clicked: false,
            id: 3,
        },
        {
            question: "WHAT IF I AM OUT-OF-STATE?",
            answer: "If you find your perfect van but it is outside the state of Colorado, we offer van transportation at the flat rate of $1.99/mi. You will have an option to fill in the total number of miles you need the van transported in your proposal, and the cost will be factored into your final invoice.",
            clicked: false,
            id: 4,
        },
        {
            question: "CAN YOU BUILD A BATHROOM IN MY VAN?",
            answer: "We install porta-potties and compostable toilets. You also have the option of a seat shower or a full standing shower, but they are not a full bathroom with a separate water system.",
            clicked: false,
            id: 5,
        },
        {
            question: "DO YOU DO PLUMBING AND ELECTRICAL?",
            answer: "Yes, we do full electrical, the output of our system is 480 Watts in solar, and 200 Amps in batteries. As far as plumbing goes, it will include the water pump, water line that runs to the faucet, the water tank, a shower seat as well as a porta-potty. Grey water tanks are available.",
            clicked: false,
            id: 6,
        },
        {
            question: "WHAT DO YOU USE FOR INSULATION?",
            answer: "We use 70% of foamular, 10% reflectix, 10% spray foam, and 10% sound-proofing insulation",
            clicked: false,
            id: 7,
        },
        {
            question: "WHAT ACCESSORIES DO I NEED TO PROVIDE?",
            answer: "Our full conversion has every standard accessory, see the full list here. Pata will buy all the needed parts. If there is something you would like included in your conversion that you do not see on our list, please include it in the 'additional comments' section of the New Client Questionnaire.",
            clicked: false,
            id: 8,
        },
        {
            question: "MY VAN COMES WITH SEATS, IS THAT A PROBLEM?",
            answer: "We can remove your seats for you no problem, removal begins at $200, though that price may vary depending on how many seats.",
            clicked: false,
            id: 9,
        },
        {
            question: "I AM VERY CONCERNED ABOUT MOISTURE MANAGEMENT.",
            answer: "Pata treats the paneling with polyurethane, to prevent moisture seeping in. A vent will also help keep the air moving. There are also dehumidifiers one can buy post-conversion",
            clicked: false,
            id: 10,
        },
    ]);

    const toggleOpen = (id) => {
        let newArray = [...faqList];
        let newObj = newArray[id];
        newObj.clicked = !newObj.clicked;
        newArray[id] = newObj;
        setFaqList(newArray);
    };

    let content = faqList.map((faq) => {
        return (
            <Faq
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                clicked={faq.clicked}
                id={faq.id}
                onClicked={() => {
                    toggleOpen(faq.id);
                }}
                link1={faq.link1}
                link2={faq.link2}
                link3={faq.link3}
                answer2={faq.answer2}
            ></Faq>
        );
    });

    return (
        <div className={classes.container} id={"faqs"}>
            <h4 className={classes.flag}>FAQ</h4>
            <h2 className={classes.title}>We have the answers</h2>
            {content}
            <Button path={"/aboutUs"}>about us</Button>
        </div>
    );
};

export default Faqs;
