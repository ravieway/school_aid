import React, { Component } from "react";
import AddUser from "../component/AddUser";
import Header from "../component/Header";
import Footer from "../component/Footer";
class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <AddUser />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
