import React, { Component } from "react";
// import PeopleItem from "./PeopleItem";
import ContactSlider from "./ContactSlider";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: 0
        };
        this.initScroll = this.initScroll.bind(this);
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
            <div>
                <div id="contactIcon">
                    <i className="iconfont icon-gallery" />
                </div>
                <h1 id="contact" className="has-lines">
                    Gallery
                </h1>

                <div className="contact">
                    <div id="contactSlider">
                        <ContactSlider />
                    </div>
                    <button
                        className="contactButton"
                        onClick={() => this.initScroll("home")}
                    >
                        Top
                    </button>
                </div>
            </div>
        );
    }
}
