import React, { Component } from "react";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarStyle: {},
            marginY: 0,
            destination: 0,
            speed: 5,
            scroller: null
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.initScroll = this.initScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll(event) {
        const navbarStyle = {
            backgroundColor: "white",
            color: "black"
        };
        if (document.getElementById("showcase")) {
            let scrollTop =
                window.pageYOffset -
                document.getElementById("showcase").clientHeight;
            if (scrollTop >= -100) {
                this.setState({ navbarStyle: navbarStyle });
            } else {
                this.setState({ navbarStyle: {} });
            }
        }
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
                <div>
                    <nav className="navbar" style={this.state.navbarStyle}>
                        <ul style={this.state.navbarStyle}>
                            <li
                                id="home"
                                onClick={() => this.initScroll("home")}
                            >
                                <a
                                    onClick={() => this.initScroll("home")}
                                    style={this.state.navbarStyle}
                                >
                                    <b>Home</b>
                                </a>
                            </li>
                            <li onClick={() => this.initScroll("researchLink")}>
                                <a
                                    onClick={() =>
                                        this.initScroll("researchLink")
                                    }
                                    style={this.state.navbarStyle}
                                >
                                    <b>Research</b>
                                </a>
                            </li>
                            <li
                                onClick={() =>
                                    this.initScroll("publicationLink")
                                }
                            >
                                <a
                                    onClick={() =>
                                        this.initScroll("publicationLink")
                                    }
                                    style={this.state.navbarStyle}
                                >
                                    <b>Publications</b>
                                </a>
                            </li>
                            <li onClick={() => this.initScroll("peopleLink")}>
                                <a
                                    onClick={() =>
                                        this.initScroll("peopleLink")
                                    }
                                    style={this.state.navbarStyle}
                                >
                                    <b>People</b>
                                </a>
                            </li>
                            <li onClick={() => this.initScroll("contactLink")}>
                                <a
                                    onClick={() =>
                                        this.initScroll("contactLink")
                                    }
                                    style={this.state.navbarStyle}
                                >
                                    <b>Gallery</b>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
