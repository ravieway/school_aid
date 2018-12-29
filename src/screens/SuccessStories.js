import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SuccessGallery from "../component/SuccessGallery";

class SuccessStories extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div className="page-heading text-center">
          <div className="container zoomIn animated">
            <h1 className="page-title">
              SuccessStories <span className="title-under" />
            </h1>
          </div>
        </div>

        <div >
          <SuccessGallery />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SuccessStories;
