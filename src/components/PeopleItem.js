import React, { Component } from "react";
import Popup from "reactjs-popup";

export default class PeopleItem extends Component {
    render() {
        const item = this.props.item;

        return (
            <div className="peopleCardItem">
                <section className="card_profile">
                    <div id="image-container">
                        <Popup
                            trigger={
                                <img
                                    className="peopleImg"
                                    alt={item.name}
                                    src={
                                        window.location.origin +
                                        window.location.pathname +
                                        item.img_url
                                    }
                                    title={`Profile about ${item.name}`}
                                />
                            }
                            modal
                            closeOnDocumentClick
                        >
                            <span>
                                <div>
                                    <img
                                        className="peopleImgBig"
                                        src={
                                            window.location.origin +
                                            window.location.pathname +
                                            item.img_url
                                        }
                                        alt={item.title}
                                    />{" "}
                                </div>
                                <p className="popUpText">{item.experience} </p>
                            </span>
                        </Popup>
                    </div>
                    <div id="name">{item.name}</div>
                    <div id="job">{item.title}</div>
                    <div id="project">{item.Project}</div>
                    <div id="connect">
                        <div id="add">
                            {item.Add ? (
                                <i className="iconfont icon-address" />
                            ) : (
                                ""
                            )}
                            {item.Add}
                        </div>
                        <a href={`mailto:${item.Email}`}>
                            <div className="email">
                                <i className="iconfont icon-EmailHili" />{" "}
                                {item.Email ? item.Email : "N/A"}
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}
