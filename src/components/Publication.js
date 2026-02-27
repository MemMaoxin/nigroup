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
                    <div style={{ textAlign: "center", margin: "14px 0" }}>
                        <a
                            href="https://scholar.google.com/citations?user=xMOTgY4AAAAJ&hl=zh-CN&oi=ao"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: "22px",
                                fontWeight: 600,
                                color: "#1a73e8",
                                textDecoration: "underline",
                                textUnderlineOffset: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Google Scholar Profile
                        </a>
                    </div>
                    <PublicationTab />
                </div>
                <div id="peopleLink" />
            </div>
        );
    }
}
