import { Fragment, useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Container, Row, Col } from "reactstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Features.css";
import Title from "../common/Title";

const Features = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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

  // const handleSlideChange = (event) => {
  //   setActiveSlide(event.item.index);
  // };

  // useEffect(() => {
  //   // Automatically switch slides every 5 seconds
  //   const timer = setInterval(() => {
  //     const nextSlide = (activeSlide + 1) % slides.length;
  //     setActiveSlide(nextSlide);
  //   }, 200);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [activeSlide, slides.length]);

  // const options = {
  //   loop: true,
  //   center: true,
  //   items: 3,
  //   margin: 0,
  //   autoplay: true,
  //   dots: true,
  //   autoplayTimeout: 8500,
  //   smartSpeed: 450,
  //   nav: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };

  return (
    <Fragment>
      <div className="container mt-2 ">
        <Title title="Awesome Features" />

        <Container className="features">
          <Row>
            <Col>
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
                    <div className="h-100 carousel-box shadow-box">
                      <i className={`Logo ${index + 1}`}></i>

                      <h3>{slide.title}</h3>
                      <p>{slide.content}</p>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </Col>
          </Row>
        </Container>

        {/* <OwlCarousel
          className="owl-carousel features-carousel owl-theme "
          loop
          margin={10}
          nav
          {...options}
        >
          <div class="item">
            <div className="carousel-content">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <h3>User Friendly</h3>
              <p>
                Estimator is extremely user friendly with few input parameters
              </p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-check"></i>
            </div>
            <h3>Accuracy</h3>
            <p>
              Estimates generated have high accuracy with all necessary checks
            </p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>Time Saving</h3>
            <p>It saves time, has estimate is generatedin just a few seconds</p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-wallet"></i>
            </div>
            <h3>Cost Effective</h3>
            <p>It saves lots of man hours and indirectly is cost effective</p>
          </div>
        </OwlCarousel> */}
      </div>
    </Fragment>
  );
};

export default Features;
