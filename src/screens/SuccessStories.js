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
        <div style={{paddingTop : 60}} >
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
