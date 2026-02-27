import React, { Component } from "react";

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
                                    Optoelectronics
                                </li>
                                <li>
                                    {" "}
                                    <i className="iconfont icon-scientificresearch" />
                                    {"  "} Wearable sensors and devices
                                </li>
                                <li>
                                    {" "}
                                    <i className="iconfont icon-scientificresearch" />
                                    {"  "}
                                    Fabrication methods for printable, flexible and stretchable integrated electronic circuits
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap', flexDirection: 'column'}}>
                            <img src="/img/poster/1.png" alt="poster1" style={{maxWidth: '80%', height: 'auto'}} />
                            <img src="/img/poster/2.png" alt="poster2" style={{maxWidth: '80%', height: 'auto'}} />
                            <img src="/img/poster/3.png" alt="poster3" style={{maxWidth: '80%', height: 'auto'}} />
                            <img src="/img/poster/4.png" alt="poster4" style={{maxWidth: '80%', height: 'auto'}} />
                        </div>

                </div>
            </div>
        );
    }
}
