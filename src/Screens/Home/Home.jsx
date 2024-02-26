import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Slider from "react-slick";
import { cards } from "../../assets/Images";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}
const Card = ({ src, title, price }) => {
  return (
    <Link to={"/product/" + title}>
      <div className="card">
        <div className="card-img-cont">
          <img className="card-img" src={src} alt={title} />
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price}</h2>
        </div>
      </div>
    </Link>
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}
export const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container">
      <Slider className="slider-clothes" {...settings}>
        {cards.map((card, i) => (
          <Card src={card.img} price={card.price} title={card.title} />
        ))}
        {cards.map((card, i) => (
          <Card src={card.img} price={card.price} title={card.title} />
        ))}
      </Slider>
    </div>
  );
};
