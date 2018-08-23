import React, { Component } from "react";
import ResearchItem from "./ReseachItem";

export default class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            research: require("../data/research.json").research
        };
    }
    render() {
        return (
            <div>
                <div id="researchIcon">
                    <i className="iconfont icon-research" />
                </div>

                <h1 id="research" className="has-lines">
                    Research
                </h1>
                <div className="research">
                    <div className="researchIllustration">
                        <div
                            style={{
                                // maxWidth: "700px",
                                // minWidth: "460px",
                                textAlign: "left",
                                fontFamily: "Roboto",
                                color: "#565656",
                                lineHeight: "1.6"
                            }}
                        >
                            <ul>
                                <li>
                                    {" "}
                                    <i className="iconfont icon-scientificresearch" />
                                    {"  "}
                                    High performance near-to-mid IR
                                    photodetectors
                                </li>
                                <li>
                                    {" "}
                                    <i className="iconfont icon-scientificresearch" />
                                    {"  "} Solar cells and bioelectronic devices
                                </li>
                                <li>
                                    {" "}
                                    <i className="iconfont icon-scientificresearch" />
                                    {"  "}
                                    Spectroscopic studies of photophysical
                                    processes that occur in polymers
                                </li>

                                <li>
                                    <i className="iconfont icon-scientificresearch" />
                                    {"    "}
                                    Colloidal nanocrystals
                                </li>
                                <li>
                                    {" "}
                                    <i className="iconfont icon-scientificresearch" />
                                    {"  "}
                                    Perovskite materials and their associated
                                    interfaces
                                </li>

                                <li>
                                    {" "}
                                    <i className="iconfont icon-scientificresearch" />
                                    {"  "}
                                    Fabrication methods for flexible and
                                    stretchable integrated electronic circuits
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="researchCard">
                        {this.state.research.map(item => (
                            <ResearchItem key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
