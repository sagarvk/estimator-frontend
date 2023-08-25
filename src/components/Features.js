import { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Features.css";
import Title from "../common/Title";

const Features = () => {
  const slides = [
    {
      logo: "fi-cwsuxl-check",
      title: "User Friendly",
      content: "Estimator is extremely user friendly with few input parameters",
    },
    {
      logo: "fi-xnsuxl-accounting-solid",
      title: "Accuracy",
      content:
        "Estimates generated have high accuracy with all necessary checks",
    },
    {
      logo: "fi-cwsuhl-clock-wide",
      title: "Time Saving",
      content: "It saves time, has estimate is generatedin just a few seconds",
    },
    {
      logo: "fi-xnsuxl-rupee",
      title: "Cost Effective",
      content: "It saves lots of man hours and indirectly is cost effective",
    },
  ];

  return (
    <Fragment>
      <Title title="Awesome Features" />

      <OwlCarousel
        className="owl-theme"
        items={2}
        loop
        nav={false}
        dots={true}
        center={true}
        autoplay={true}
        autoplayTimeout={5000}
        smartSpeed={300}
        lazyLoad={true}
        responsive={{
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            {" "}
            {/*className="carousel-item"*/}
            <div>
              {" "}
              {/*className="h-100 carousel-box shadow-box"*/}
              <i />
              {/**className={`Logo ${index + 1}`} */}
              <h3 style={{ textAlign: "center" }}>{slide.title}</h3>
              <p style={{ textAlign: "center" }}>{slide.content}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </Fragment>
  );
};

export default Features;
