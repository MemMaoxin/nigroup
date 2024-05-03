import React, { Component } from "react";

export default class ToggleAlumni extends Component {
    render() {
        return (
            <div>
                <button
                    id="toggleAlumni"
                    onClick={() => this.props.handleOnClick()}
                >
                    {this.props.text}
                </button>
            </div>
        );
    }
}
