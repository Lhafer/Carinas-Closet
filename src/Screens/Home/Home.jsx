import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Slider from "react-slick";
import { cards } from "../../assets/Images";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}
const Card = ({ src, title }) => {
  return (
    <div className="card">
      <div className="card-img-cont">
        <img className="card-img" src={src} alt={title} />
      </div>
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}
export const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container">
      <Slider className="slider-clothes" {...settings}>
        {cards.map((card, i) => (
          <Card src={card.img} title={card.title} />
        ))}
      </Slider>
    </div>
  );
};
