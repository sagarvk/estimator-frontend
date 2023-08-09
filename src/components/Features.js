import { Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Title from '../common/Title';

const Features = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <Fragment>
      <div className="container mt-2">
        <Title title="Awesome Features" />

        <OwlCarousel
          className="owl-carousel features-carousel owl-theme "
          loop
          margin={10}
          nav
          {...options}
        >
          <div class="item">
            <div class="feature-item">
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
        </OwlCarousel>
      </div>
    </Fragment>
  );
};

export default Features;
