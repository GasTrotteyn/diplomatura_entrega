import React, { useState } from "react";
import classes from "./Nav.module.css";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import Brand from "../../../Assests/optimized/brand.svg";
import SideDrawer from "./Sidedrawer/Sidedrawer";

const Nav = (props) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className={classes.container}>
            <img className={classes.title} src={Brand} alt="brand"></img>
            <BurgerIcon
                hidden={openMenu}
                clicked={() => {
                    setOpenMenu(true);
                }}
            ></BurgerIcon>
            <SideDrawer
                show={openMenu}
                clicked={() => {
                    setOpenMenu(false);
                }}
            ></SideDrawer>
        </nav>
    );
};

export default Nav;
