import React from "react";
import Navbar from "./Navbar";

// const newsItems = [
//     {
//         href: "/#",
//         text: "Congratulations to Dr. Yu Zhang for passing her oral defense. (2018/9/3)",
//     },
//     {
//         href: "/#",
//         text: "Congratulations to Dr. Jie Cao for passing his oral defense. (2018/8/3)",
//     },
//     {
//         href: "/#",
//         text: "Congratulations to Miss Mengjie Xu for passing her oral defense. (2018/7/30)",
//     },
//     {
//         href: "/#",
//         text: "Congratulations to Dr. Yang Zhou for passing his oral defense. (2018/7/5)",
//     },
//     {
//         href: "https://onlinelibrary.wiley.com/doi/abs/10.1002/smll.201801520",
//         text:
//             "Check out our new paper on Small (201801520) for pressure sensing. (2018/7/3)",
//         external: true,
//     },
//     {
//         href: "/#",
//         text: "Congratulations to Dr. Jing Liu for passing her oral defense. (2018/6/20)",
//     },
// ];

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <div id="showcase" />

            <div id="transparent">
                <div>
                    <p>Laboratory of Advanced Optoelectronics and Sensing Technologies</p>
                    <p>
                        <i>Ni Group @ CUHK E.E.Dept.</i>
                    </p>

                    <div className="researchFocus">
                        <div className="currentInterest">
                            <h2>
                                <i className="iconfont icon-MissionandVision" /> Focus
                            </h2>
                            <p>
                                Our research team aims to develop scientific and technological
                                approaches required to understand the electronic properties and
                                fundamental physics of novel functional materials, and to apply
                                the fundamental findings to the development of practical
                                optoelectronic, electronic and biomedical devices.
                            </p>
                        </div>

                        <div className="latest" style={{ paddingTop: "5px" }}>
                            <h2>
                                <i className="iconfont icon-rexun" /> Latest News
                            </h2>
                            <h3
                                style={{
                                    marginBottom: "15px",
                                    marginTop: "5px",
                                    color: "orange",
                                }}
                            >
                                We are actively hiring Ph.D.candidates and Postdocs
                            </h3>
{/* 
                            <div className="microsoft researchFocus_container">
                                <ul className="marquee">
                                    {newsItems.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="iconfont icon-news" />
                                            {item.external ? (
                                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <a href={item.href}>{item.text}</a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div id="researchLink" />
        </div>
    );
}
