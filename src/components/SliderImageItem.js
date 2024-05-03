import React, { Component } from "react";

export default class SliderImageItem extends Component {
    render() {
        const item = this.props.item;

        return (
            <div className="sliderImageItem">
                <img
                    className="sliderImg"
                    src={
                        window.location.origin +
                        window.location.pathname +
                        item.img_url
                    }
                    alt={item.title}
                />
            </div>
        );
    }
}
