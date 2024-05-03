import React, { Component } from "react";
import PublicationTab from "./PublicationTab";
import PublicationSlider from "./PublicationSlider";

export default class Publication extends Component {
    render() {
        return (
            <div>
                <div id="publicationLink" />
                <div id="publicationIcon">
                    <i className="iconfont icon-Publications" />
                </div>
                <h1 id="publication" className="has-lines">
                    Publications
                </h1>
                <div className="publication">
                    <PublicationSlider />
                    <PublicationTab />
                </div>
                <div id="peopleLink" />
            </div>
        );
    }
}
