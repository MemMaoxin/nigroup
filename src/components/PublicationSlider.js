import React from "react";

export default class PublicationSlider extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                    <a
                        href="https://pubs.acs.org/doi/abs/10.1021/acsnano.7b00972"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <h1>
                            <span style={{ visibility: "hidden" }}>Paper</span>
                        </h1>
                    </a>
                </div>
                <div className="box">
                    <a
                        href="https://pubs.acs.org/doi/abs/10.1021/acsami.7b09384"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1>
                            <span style={{ visibility: "hidden" }}>
                                Gallery
                            </span>
                        </h1>
                    </a>
                </div>
                {/* <div className="box">
                    <h1>
                        <a
                            href="https://pubs.acs.org/doi/abs/10.1021/acsnano.7b00972"
                            target="_blank"
                        >
                            <span>of</span>
                        </a>
                    </h1>
                </div> */}
                <div className="box">
                    <a
                        href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/adma.201702675"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <h1>
                            <span style={{ visibility: "hidden" }}>Zhao's</span>
                        </h1>
                    </a>
                </div>
                <div className="box">
                    <a
                        href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/adma.201707350"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <h1>
                            <span style={{ visibility: "hidden" }}>Lab</span>
                        </h1>{" "}
                    </a>
                </div>
            </div>
        );
    }
}
