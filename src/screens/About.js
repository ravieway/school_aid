import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Header active="about"/>
        </div>

        <div className="page-heading text-center">
          <div className="container zoomIn animated">
            <h1 className="page-title">
              ABOUT US <span className="title-under" />
            </h1>
          </div>
        </div>

        <div className="main-container">
          <div className="container">
            <div className="row fadeIn animated">
              <div className="col-md-6">
                <img
                  src="assets/images/about-us.jpg"
                  alt=""
                  className="img-responsive"
                />
              </div>

              <div className="col-md-6">
                <h2 className="title-style-2">
                  ABOUT SchoolAID <span className="title-under" />
                </h2>

                <p>
                  Free education system, provision of school textbooks,
                  uniforms, and other school development program, have
                  contributed towards improving school enrolment, attendance and
                  increasing the quality of education received by the poor
                  communities in Sri Lanka. However, many schools, especially in
                  the rural areas in the country undergo hardship due to lack of
                  basic facilities such as availability of drinking water,
                  sanitary, buildings and other basic needs. Evan though it is
                  the mandate of government to fulfill these needs, due to
                  budget constraints and limited resources it is difficult for
                  the authorities to fulfill all these needs.
                </p>

                <p>
                  Fortunately there are many donors, in Sri Lanka and overseas,
                  who are willing to provide their monitory assistance to these
                  needful schools. SchoolAid is efficient system in the
                  Department of Education to find and track these
                  supportive donors to help thousands of school children
                  especially in the remote areas of Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
