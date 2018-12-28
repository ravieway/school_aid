import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

class LoginForm extends Component {


    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Logged!");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  
  



    render() {
        return (
        <div>
            <div id="login">
            <h3>Login</h3>
            <form method="post"  name="login"  onSubmit= {this.submituserRegistrationForm} >


            <div className="row">
            <div className="form-group col-md-12 ">
             
            <input type="text" name="username" placeholder="Username" required value={this.state.fields.username} onChange={this.handleChange} />
            </div>
            </div>
            <div className="errorMsg">{this.state.errors.username}</div>


            <div className="row">
            <div className="form-group col-md-12 "> 
            <input type="password" name="password" placeholder="Password" required value={this.state.fields.password} onChange={this.handleChange} />
            </div>
            </div>
            <div className="errorMsg">{this.state.errors.password}</div>

            <input type="submit" className="btn btn-primary"  value="Log In"/>
            </form>
        </div>
        </div>
    
          );
    }
}   

export default LoginForm;
