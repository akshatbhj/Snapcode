import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/fs.jpeg";
import img2 from "../assets/uix.jpeg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        interval={1500}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p>Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p>UI / UX Design</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
