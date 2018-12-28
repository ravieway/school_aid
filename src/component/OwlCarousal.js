import React, { Component } from "react";

class OwlCarousal extends Component {
  render() {
    return (
      <div>
        <div
          id="homeCarousel"
          className="carousel slide carousel-home"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li data-target="#homeCarousel" data-slide-to="0" className="active" />
            <li data-target="#homeCarousel" data-slide-to="1" />
            <li data-target="#homeCarousel" data-slide-to="2" />
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="assets/images/slider/home-slider-1.jpg" alt="" />

              <div className="container">
                <div className="carousel-caption">
                  <h2 className="carousel-title bounceInDown animated slow">
                    When people help people, change happens
                  </h2>
                  <h4 className="carousel-subtitle bounceInUp animated slow ">
                    Do not let them down!
                  </h4>
                  <a
                    href="#"
                    className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    DONATE NOW
                  </a>
                </div>
              </div>
            </div>

            <div className="item ">
              <img src="assets/images/slider/home-slider-2.jpg" alt="" />

              <div className="container">
                <div className="carousel-caption">
                  <h2 className="carousel-title bounceInDown animated slow">
                    Together we can improve their lives
                  </h2>
                  <h4 className="carousel-subtitle bounceInUp animated slow">
                    {" "}
                    Let's do it !
                  </h4>
                  <a
                    href="#"
                    className="btn btn-lg btn-secondary hidden-xs bounceInUp animated"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    DONATE NOW
                  </a>
                </div>
              </div>
            </div>

            <div className="item ">
              <img src="assets/images/slider/home-slider-3.jpg" alt="" />

              <div className="container">
                <div className="carousel-caption">
                  <h2 className="carousel-title bounceInDown animated slow">
                    It’s all big when you’re changing the world
                  </h2>
                  <h4 className="carousel-subtitle bounceInUp animated slow">
                    You can make the diffrence !
                  </h4>
                  <a
                    href="#"
                    className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    DONATE NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#homeCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="right carousel-control"
            href="#homeCarousel"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default OwlCarousal;
