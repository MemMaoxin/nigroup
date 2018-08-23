import React, { Component } from "react";
import PeopleItem from "./PeopleItem";
import ToggleAlumni from "./ToggleAlumni";

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: require("../data/people.json").people,
            alumni: require("../data/people.json").alumni,
            show: "flex",
            text: "Alumni"
        };
    }

    handleOnClick() {
        if (this.state.show === "flex") {
            this.setState({ show: "none", text: "Show Alumni" });
        } else if (this.state.show === "none") {
            this.setState({ show: "flex", text: "Alumni" });
        }
    }

    render() {
        return (
            <div>
                <div id="peopleIcon">
                    <i className="iconfont icon-people" />
                </div>
                <h1 id="people" className="has-lines">
                    People
                </h1>

                <div className="people">
                    <div className="peopleCard">
                        {this.state.people.map(item => (
                            <PeopleItem key={item.name} item={item} />
                        ))}
                    </div>
                    <ToggleAlumni
                        handleOnClick={() => this.handleOnClick()}
                        text={this.state.text}
                    />
                    <div
                        className="peopleCard alumni"
                        style={{ display: this.state.show }}
                    >
                        {this.state.alumni.map(item => (
                            <PeopleItem key={item.name} item={item} />
                        ))}
                    </div>
                    <div id="contactLink" />
                </div>
            </div>
        );
    }
}
