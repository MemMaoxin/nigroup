import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router";
// import lab from "../img/lab.png";

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="showcase" />
                <div id="transparent">
                    <div>
                        <p>
                            Laboratory of Organic and Nanostructured
                            Optoelectronics{" "}
                        </p>{" "}
                        <p>
                            <i> Ni Group @ CUHK E.E.Dept. </i>{" "}
                        </p>{" "}
                        <div className="researchFocus">
                            <div className="currentInterest">
                                <h2>
                                    <i className="iconfont icon-MissionandVision" />{" "}
                                    Research Focus{" "}
                                </h2>{" "}
                                <p>
                                    Our research team aims to develop scientific
                                    and technological approaches required to
                                    understand the electronic properties and
                                    fundamental physics of novel nanostructured
                                    semiconductors, and to apply the fundamental
                                    findings to the development of practical
                                    optoelectronic, electronic and biomedical
                                    devices.{" "}
                                </p>{" "}
                            </div>
                            <div
                                className="latest"
                                style={{
                                    paddingTop: "5px"
                                }}
                            >
                                <h2>
                                    <i className="iconfont icon-rexun" /> Latest
                                    News{" "}
                                </h2>{" "}
                                <h3
                                    style={{
                                        marginBottom: "15px",
                                        marginTop: "5px",
                                        color: "orange"
                                    }}
                                >
                                    {" "}
                                    We are actively hiring Ph.D.candidates and
                                    Postdocs{" "}
                                </h3>{" "}
                                <div className="microsoft researchFocus_container">
                                    <ul className="marquee">
                                        {" "}
                                        {/* <a href="#">
                                                                <li>
                                                                    <i className="iconfont icon-news" />{" "}
                                                                    <bold>
                                                                        We are actively hiring Ph.D.
                                                                        candidates and Postdocs.
                                                                    </bold>
                                                                </li>
                                                            </a> */}{" "}
                                        <a href="#">
                                            <li>
                                                <i className="iconfont icon-news" />{" "}
                                                Congratulations to Dr.Yang Zhou
                                                for passing his oral defense.
                                                (2018/7/5){" "}
                                            </li>{" "}
                                        </a>{" "}
                                        <a
                                            href="https://onlinelibrary.wiley.com/doi/abs/10.1002/smll.201801520"
                                            target="blank"
                                        >
                                            <li>
                                                <i className="iconfont icon-news" />{" "}
                                                Check out our new paper on{" "}
                                                <b>
                                                    <em>Small</em>
                                                </b>{" "}
                                                (201801520) for pressure
                                                sensing. (2018/7/3){" "}
                                            </li>{" "}
                                        </a>{" "}
                                        <a href="#">
                                            <li>
                                                <i className="iconfont icon-news" />{" "}
                                                Congratulations to Dr.Jing Liu
                                                for passing her oral defense.
                                                (2018/6/20){" "}
                                            </li>{" "}
                                        </a>{" "}
                                        <a
                                            href="https://doi.org/10.1002/adma.201800156"
                                            target="blank"
                                        >
                                            <li>
                                                <i className="iconfont icon-news" />{" "}
                                                Check out our new review paper
                                                on{" "}
                                                <b>
                                                    <em>
                                                        {" "}
                                                        Advanced Materials{" "}
                                                    </em>{" "}
                                                </b>{" "}
                                                (1800156) for biointegrated
                                                optoelectronic devices.
                                                (2018/5/28){" "}
                                            </li>{" "}
                                        </a>{" "}
                                        <a
                                            href=" https://www.sciencedirect.com/science/article/pii/S2211285518303306"
                                            target="blank"
                                        >
                                            <li>
                                                <i className="iconfont icon-news" />{" "}
                                                Check out our new papar on{" "}
                                                <b>
                                                    <em> Nano Energy </em>{" "}
                                                </b>{" "}
                                                about Na<sub>3</sub>V<sub>
                                                    2{" "}
                                                </sub>(PO<sub>4</sub>)
                                                <sub>3</sub> for Na-ion battery.
                                                (2018/5/9){" "}
                                            </li>{" "}
                                        </a>{" "}
                                        <a
                                            href=" https://onlinelibrary.wiley.com/doi/abs/10.1002/adma.201707350"
                                            target="blank"
                                        >
                                            <li>
                                                <i className="iconfont icon-news" />{" "}
                                                Check out our new communication
                                                paper on{" "}
                                                <b>
                                                    <em>
                                                        {" "}
                                                        Advanced Materials{" "}
                                                    </em>{" "}
                                                </b>{" "}
                                                (1707350) for perovskite solar
                                                cells. (2018/5/7){" "}
                                            </li>{" "}
                                        </a>{" "}
                                        {/* <a href="#">
                                                            <li>
                                                                <i className="iconfont icon-news" />{" "}
                                                                Congratulations to Mengyu for
                                                                getting her doctoral degree!
                                                            </li>
                                                        </a> */}{" "}
                                    </ul>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>

                <div id="researchLink" />
            </div>
        );
    }
}
