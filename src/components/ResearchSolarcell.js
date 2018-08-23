import React from "react";
import Slider from "react-slick";
import SliderImageItem from "./SliderImageItem";
import ResearchButton from "./ResearchButton";

export default class ResearchSolarcell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: require("../data/researchSlider.json").researchSolarcell
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
            <div className="researchSlider">
                <h2>Photovoltaics and Photodetection</h2>
                <div className="researchSliderButton">
                    <div className="slider">
                        <Slider {...settings}>
                            {this.state.slider.map((item, i) => (
                                <SliderImageItem key={i} item={item} />
                            ))}
                        </Slider>
                    </div>
                    <ResearchButton />
                </div>
            </div>
        );
    }
}
