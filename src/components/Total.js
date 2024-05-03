import React, { Component } from "react";

import Sidenav from "./Sidenav";
import LandingPage from "./LandingPage";
import Research from "./Research";
import People from "./People";
import Publication from "./Publication";
import Contact from "./Contact";
import Copyright from "./Copyright";

class Total extends Component {
    render() {
        return (
            <div>
                <Sidenav />
                <div id="main">
                    <LandingPage />
                    <Research />
                    <Publication />
                    <People />
                    <Contact />
                    <Copyright />
                </div>
            </div>
        );
    }
}

export default Total;
