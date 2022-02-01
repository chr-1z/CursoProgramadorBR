import React from "react";
import './App.css'

function Header(props) {

    return(
        <header className="header">
            <h1 className="logo">{props.name}</h1>
            <ul className="menu">
                <li className="about">{props.links[0]}</li>
                <li className="buy">{props.links[1]}</li>
                <li className="contact">{props.links[2]}</li>
            </ul>
        </header>
    );
}

export default Header;