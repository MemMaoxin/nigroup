import React, { Component } from "react";
import $ from "jquery";

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarStyle: {},
            marginY: 0,
            destination: 0,
            speed: 5,
            scroller: null
        };

        this.initScroll = this.initScroll.bind(this);
    }
    // componentWillMount() {
    //     function fix_scroll() {
    //         var s = 1 * $(window).scrollTop();
    //         var fixedTitle = $(".open-slide");
    //         fixedTitle.css("position", "absolute");
    //         fixedTitle.css("top", s + 10 + "px");
    //         fixedTitle.css("left", 10 + "px");
    //     }
    //     $(window).on("scroll", fix_scroll);
    // }
    openSlideMenu(e) {
        e.preventDefault();
        document.getElementById("side-menu").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
    }

    closeSlideMenu(e) {
        e.preventDefault();
        document.getElementById("side-menu").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
    }
    initScroll(elementId) {
        if (document.getElementById(elementId)) {
            this.setState(
                {
                    destination: document.getElementById(elementId).offsetTop
                },
                () => window.scroll(0, this.state.destination)
            );
        }
    }
    render() {
        return (
            <div className="open-slide">
                <span>
                    <a href="#" onClick={e => this.openSlideMenu(e)}>
                        <svg width="30" height="30">
                            <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
                            <path
                                d="M0,14 30,14"
                                stroke="#000"
                                strokeWidth="5"
                            />
                            <path
                                d="M0,23 30,23"
                                stroke="#000"
                                strokeWidth="5"
                            />
                        </svg>
                    </a>
                </span>
                <div id="side-menu" className="side-nav">
                    <a
                        href="#"
                        className="btn-close"
                        onClick={e => this.closeSlideMenu(e)}
                    >
                        &times;
                    </a>
                    <a onClick={() => this.initScroll("home")}>Home</a>
                    <a onClick={() => this.initScroll("researchLink")}>
                        Research
                    </a>
                    <a onClick={() => this.initScroll("publicationLink")}>
                        Publications
                    </a>
                    <a onClick={() => this.initScroll("peopleLink")}>People</a>
                    <a onClick={() => this.initScroll("contactLink")}>
                        Gallery
                    </a>
                </div>
            </div>
        );
    }
}
