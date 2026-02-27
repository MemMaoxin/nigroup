import React, { Component } from "react";
import Popup from "reactjs-popup";

export default class AlumniItem extends Component {
    render() {
        const item = this.props.item;

        return (
            <div className="AlumniCardItem">
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
                    {/* <div id="job">{item.title}</div> */}
                    <div id="project">{item.Project}</div>

                </section>
            </div>
        );
    }
}
