import React, { Component } from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import LandingPage from "./components/LandingPage";
import Research from "./components/Research";
import People from "./components/People";
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

class App extends Component {
    render() {
        return (
            <div>
                <Sidenav />
                <div id="main">
                    <LandingPage />
                    <Research />
                    {this.props.children}
                    <Publication />
                    <People />
                    <Contact />
                    <Copyright />
                </div>
            </div>
        );
    }
}

export default App;
