import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <nav className="navbar navbar-static-top">
            <div className="navbar-top">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <ul className="list-unstyled list-inline header-contact">
                      <li>
                        {" "}
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:">+94 11 2 000 000 </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-envelope" />{" "}
                        <a href="">contact@skoolaid.org</a>{" "}
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6 col-xs-12 text-right">
                    <ul className="list-unstyled list-inline header-social">
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <div>
                            <h6>Log in</h6>
                          </div>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa-facebook" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa-twitter" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa-youtube" />{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-main">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>

                  <a className="navbar-brand" href="index.html">
                    <img src="assets/images/skoolaid-logo.png" alt="" />
                  </a>
                </div>

                <div
                  id="navbar"
                  className="navbar-collapse collapse pull-right"
                >
                  <ul className="nav navbar-nav">
                    <li>
                      <a className="is-active" routerlink="home">
                        HOME
                      </a>
                    </li>
                    <li>
                      <a href="about.html">ABOUT</a>
                    </li>
                    <li className="has-child">
                      <a routerlink="causes">CAUSES</a>

                      <ul className="submenu">
                        <li className="submenu-item">
                          <a href="causes.html">Causes list </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="gallery.html">SUCCESS STORIES</a>
                    </li>
                    <li>
                      <a href="contact.html">CONTACT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
