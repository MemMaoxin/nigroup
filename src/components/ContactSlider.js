import React from "react";
import Slider from "react-slick";
import SliderImageItem from "./SliderImageItem";

export default class ContactSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: require("../data/slider.json").slider
        };
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            autoplaySpeed: 3000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    {this.state.slider.map((item, i) => (
                        <SliderImageItem key={i} item={item} />
                    ))}
                </Slider>
            </div>
        );
    }
}
