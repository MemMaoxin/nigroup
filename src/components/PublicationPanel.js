import React, { Component } from "react";

export default class PublicationPanel extends Component {
    render() {
        const item = this.props.item;

        return (
            <div className="PublicationPanel" style={{ textAlign: "justify" }}>
                <i
                    className="iconfont icon-paper"
                    style={{ paddingRight: "5px" }}
                />
                <span>{item.author}</span>{" "}
                <a href={item.url} target="_blank">
                    <span>{item.title}</span>
                </a>,{" "}
                <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    {item.press}
                </span>, <span>{item.issue}</span>, <span>({item.year})</span>.{" "}
            </div>
        );
    }
}
