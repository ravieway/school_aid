import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="footer-top" />

          <div className="footer-main">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-col">
                    <h4 className="footer-title">
                      About us <span className="title-under" />
                    </h4>

                    <div className="footer-content">
                      <p>
                        <strong>ScoolAID</strong> is an efficient online
                        web-based system to overcome current delays and
                        limitations of identifying and tracking potential donor
                        assistance to improve facilities of underdeveloped
                        schools in Sri Lanka. As majority of these donors are
                        scattered around the world web-based system is vital for
                        this purpose.
                      </p>

                      <p />
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="footer-col">
                    <h4 className="footer-title">
                      Latest <span className="title-under" />
                    </h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="footer-col">
                    <h4 className="footer-title">
                      Contact us <span className="title-under" />
                    </h4>

                    <div className="footer-content">
                      <div className="footer-form">
                        <div className="footer-form">
                          <form action="" className="ajax-form">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                required
                              />
                            </div>

                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                                required
                              />
                            </div>

                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                placeholder="Message"
                                required
                              />
                            </div>

                            <div className="form-group alerts">
                              <div className="alert alert-success" role="alert" />

                              <div className="alert alert-danger" role="alert" />
                            </div>

                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-submit pull-right"
                              >
                                Send message
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container text-right">
              ScoolAID @ copyrights 2018 - by{" "}
              <a href="" target="_blank">
                Ravilal Senanayake
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
