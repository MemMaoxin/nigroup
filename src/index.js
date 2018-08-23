import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Route, Router, hashHistory } from "react-router";
import ResearchSpectroscopy from "./components/ResearchSpectroscopy";
import ResearchBiosensor from "./components/ResearchBiosensor";
import ResearchSolarcell from "./components/ResearchSolarcell";
import ResearchSupercapacitor from "./components/ResearchSupercapacitor";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/solarcell" component={ResearchSolarcell} />
            <Route path="/biosensor" component={ResearchBiosensor} />
            <Route path="/spectroscopy" component={ResearchSpectroscopy} />
            <Route path="/supercapacitor" component={ResearchSupercapacitor} />
        </Route>
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
