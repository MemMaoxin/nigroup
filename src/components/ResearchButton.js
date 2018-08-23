import React from "react";
import { Link } from "react-router";

export default () => {
    return (
        <div className="researchButton">
            <Link to="/spectroscopy">
                <button className="button2 b-green rot-135">
                    In-situ Spectroscopy
                </button>
            </Link>
            <Link to="/solarcell">
                <button className="button2 b-green rot-135">
                    Photovoltaics and Photodetection
                </button>
            </Link>
            <Link to="/biosensor">
                <button className="button2 b-green rot-135">Bio-Sensors</button>
            </Link>
            <Link to="/supercapacitor">
                <button className="button2 b-green rot-135">
                    Energy Storage
                </button>
            </Link>
        </div>
    );
};
