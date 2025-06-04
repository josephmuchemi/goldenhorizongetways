import React from 'react';
import slide1 from "../assets/images/slid200.jpeg";
import slide2 from "../assets/images/slid40.jpg";
import slide3 from "../assets/images/s;id50.jpg";
import slide4 from "../assets/images/slid110.avif";


const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="row">
        <div className="col-md-12">
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            
            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3"></button>
            </div>
            
       
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide4} alt="slide4" className="d-block w-100"/>
                <div className="carousel-caption">
                  <h3>First Slide Label</h3>
                  <p>Description for first slide</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={slide3} alt="slide3" className="d-block w-100"/>
                <div className="carousel-caption">
                  <h3>Second Slide Label</h3>
                  <p>Description for second slide</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={slide2} alt="slide2" className="d-block w-100"/>
                <div className="carousel-caption">
                  <h3>Third Slide Label</h3>
                  <p>Description for third slide</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={slide1} alt="slide1" className="d-block w-100"/>
                <div className="carousel-caption">
                  <h3>Fourth Slide Label</h3>
                  <p>Description for fourth slide</p>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;