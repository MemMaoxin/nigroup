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

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "16px",
                        marginTop: "24px",
                        flexWrap: "wrap",
                        flexDirection: "column"
                    }}
                >
                    {[
                        {
                            src: "/img/poster/1.png",
                            alt: "poster1",
                            title: "Photodetection Technologies"
                        },
                        {
                            src: "/img/poster/2.png",
                            alt: "poster2",
                            title: "Biomedical Sensing Technologies"
                        },
                        {
                            src: "/img/poster/3.png",
                            alt: "poster3",
                            title: "Organometal Halide Perovskite-based Optoelectronic and Photonic Devices"
                        },
                        {
                            src: "/img/poster/4.png",
                            alt: "poster4",
                            title: "Organic Electrochemical Transceiver-based Therapeutic Wearables"
                        }
                    ].map((p) => (
                        <div
                            key={p.src}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    width: "min(80%, 980px)",
                                    border: "2px solid #6c006d",
                                    borderRadius: "18px",
                                    padding: "16px",
                                    background: "rgba(255, 255, 255, 0.99)",
                                    boxShadow: "0 12px 28px rgba(43, 10, 74, 0.03)"
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginBottom: "11px"
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "inline-block",
                                            padding: "10px 18px",
                                            borderRadius: "12px",
                                            fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, Arial",
                                            fontWeight: 800,
                                            letterSpacing: "0.6px",
                                            fontSize: "20px",
                                            lineHeight: 1.2,
                                            color: "#ffffff",
                                            background: "linear-gradient(90deg, #6c006d 0%, #6c006d 100%)",
                                            textAlign: "center"
                                        }}
                                    >
                                        {p.title}
                                    </div>
                                </div>

                                <img
                                    src={p.src}
                                    alt={p.alt}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        borderRadius: "12px"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                </div>
            </div>
        );
    }
}
