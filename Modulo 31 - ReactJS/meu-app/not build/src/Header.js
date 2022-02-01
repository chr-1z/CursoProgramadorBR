import React from "react";
import './App.css'

function Header(props) {

    return(
        <header className="header">
            <h1 className="logo">{props.name}</h1>
            <ul className="menu">
                <li className="about" key={props}>
                    <a href="https://chr-1z.github.io/my-portfolio/" target="_blank">
                        {props.links[0]}
                    </a>
                </li>
                <li className="buy" key={props}>
                    <a href="https://pt.aliexpress.com/item/1005001877479051.html?gatewayAdapt=glo2bra&aff_fcid=c158bfea5a7b4d5c9e4ee93b5609a69c-1642794863003-06694-_9AkBBN&tt=CPS_NORMAL&aff_fsk=_9AkBBN&aff_platform=shareComponent-detail&sk=_9AkBBN&aff_trace_key=c158bfea5a7b4d5c9e4ee93b5609a69c-1642794863003-06694-_9AkBBN&terminal_id=e8321b117a66425ea87706d7a798f084&afSmartRedirect=n" target="_blank">
                        {props.links[1]}
                    </a>
                </li>
                <li className="contact" key={props}>
                    <a href="mailto:chris99leichtweiss@gmail.com"> 
                        {props.links[2]}
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;