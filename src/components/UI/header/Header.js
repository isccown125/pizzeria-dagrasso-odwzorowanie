import React from "react";
import "./Header.css"

import PrimaryNav from "./primaryNav/PrimaryNav";
import SecondaryNav from "./secondaryNav/SecondaryNav";

const Header = ()=>{
    return(
    <header>
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" className="logo"/>
        <PrimaryNav/>
        <SecondaryNav />
    </header>)



};

export default Header