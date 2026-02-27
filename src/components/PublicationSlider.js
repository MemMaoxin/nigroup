import React from "react";

const items = [
  {
    href: "https://www.nature.com/articles/s41928-024-01199-9",
    img: require("../img/slider/1_NE.png"),
    alt: "Nature Electronics paper",
  },
  {
    href: "https://www.science.org/doi/full/10.1126/sciadv.adu9516",
    img: require("../img/slider/2_SA.png"),
    alt: "Science Advances paper",
  },
  {
    href: "https://www.nature.com/articles/s41467-025-67118-4",
    img: require("../img/slider/3_NC.png"),
    alt: "Nature Communications paper",
  },
  {
    href: "https://www.science.org/doi/full/10.1126/sciadv.adj3476",
    img: require("../img/slider/4_SA_W.png"),
    alt: "Science Advances paper",
  },
];

export default class PublicationSlider extends React.Component {
  render() {
    return (
      <div className="container">
        {items.map((it) => (
          <a
            key={it.href}
            className="box"
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="boxImg" src={it.img} alt={it.alt} />
          </a>
        ))}
      </div>
    );
  }
}