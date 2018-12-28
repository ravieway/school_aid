import React, { Component } from "react";

class SuccessGallery extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div className="container gallery fadeIn animated">
            <div className="row">
              <a
                href="assets/images/gallery/7610291856_931fb9f461_k.jpg"
                className="col-md-3 col-sm-4 gallery-item lightbox"
              >
                <img
                  src="assets/images/gallery/thumb/7610291856_931fb9f461_k.jpg"
                  alt=""
                />

                <span className="on-hover">
                  <span className="hover-caption">Image Caption</span>
                </span>
              </a>

              <a
                href="assets/images/gallery/children-82272_1280.jpg"
                className="col-md-3 col-sm-4 gallery-item lightbox"
              >
                <img
                  src="assets/images/gallery/thumb/children-82272_1280.jpg"
                  alt=""
                />

                <span className="on-hover">
                  <span className="hover-caption">Image Caption</span>
                </span>
              </a>

              <a
                href="assets/images/gallery/human-rights.jpg"
                className="col-md-3 col-sm-4 gallery-item lightbox"
              >
                <img
                  src="assets/images/gallery/thumb/human-rights.jpg"
                  alt=""
                />

                <span className="on-hover">
                  <span className="hover-caption">Image Caption</span>
                </span>
              </a>

              <a
                href="assets/images/gallery/old-books-436498_1280.jpg"
                className="col-md-3 col-sm-4 gallery-item lightbox"
              >
                <img
                  src="assets/images/gallery/thumb/old-books-436498_1280.jpg"
                  alt=""
                />

                <span className="on-hover">
                  <span className="hover-caption">Image Caption</span>
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessGallery;
