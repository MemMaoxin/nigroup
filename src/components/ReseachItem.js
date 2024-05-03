import React, { Component } from "react";
import { Link } from "react-router";

export default class ResearchItem extends Component {
    render() {
        const item = this.props.item;

        return (
            <div className="researchCardItem">
                <div>
                    <div className="card">
                        <div className="card__thumb">
                            <div>
                                <img
                                    className="researchImg"
                                    src={
                                        window.location.origin +
                                        window.location.pathname +
                                        item.img_url
                                    }
                                    alt={item.title}
                                />
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="card__subtitle">
                                <Link to={item.link}>
                                    <div>{item.title}</div>
                                </Link>
                            </div>
                            <ul className="card__description">
                                <ul>
                                    {item.content[0] && (
                                        <li>{item.content[0]}</li>
                                    )}
                                    {item.content[1] && (
                                        <li>{item.content[1]}</li>
                                    )}
                                    {item.content[2] && (
                                        <li>{item.content[2]}</li>
                                    )}
                                    {item.content[3] && (
                                        <li>{item.content[3]}</li>
                                    )}
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
