import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import OwlCarousal from "../component/OwlCarousal";
import HomeBody from "../component/HomeBody";

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div>
          <OwlCarousal />
        </div>

        <div>
            <HomeBody />
        </div>
        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default Home;
