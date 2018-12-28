import React, { Component } from "react";
import LoginForm from "../component/LoginForm";
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
          <LoginForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
