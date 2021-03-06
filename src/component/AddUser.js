import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import Axios from 'axios';
import { REGISTER_API } from '../constants';

class AddUser extends Component {


    constructor() {
        super();
        this.state = {
          fields: {type: "member"},
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
            Axios.post(REGISTER_API, this.state.fields).then(res => {
              // this.props.history.push("/AdminPanel");
              window.location.reload();
            }).catch(err => {
              console.log(err);
            });
            fields["userName"] = "";
            fields["email"] = "";
            fields["password"] = "";
            fields["type"] = "member";
            this.setState({fields:fields});
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["userName"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["userName"] !== "undefined") {
          if (!fields["userName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
              formIsValid = false;
              errors["emailid"] = "*Please enter valid email-ID.";
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
            <h3>Add New Official</h3>
            <form method="post"  name="login"  onSubmit= {this.submituserRegistrationForm} >


            <div className="row">
            <div className="form-group col-md-12 ">
             
            <input type="text" name="userName" placeholder="Username" required value={this.state.fields.userName} onChange={this.handleChange} />
            </div>
            </div>
            <div className="errorMsg">{this.state.errors.username}</div>


            
            <div className="row">
            <div className="form-group col-md-12 "> 
            <input type="text" name="email" placeholder="E-mail" required value={this.state.fields.email} onChange={this.handleChange}  />
            </div>
            </div>
            <div className="errorMsg">{this.state.errors.emailid}</div>

            <div className="row">
            <div className="form-group col-md-12 "> 
            <input type="password" name="password" placeholder="Password" required value={this.state.fields.password} onChange={this.handleChange} />
            </div>
            </div>
            <div className="errorMsg">{this.state.errors.password}</div>
            
            <select value={this.state.fields.type} onChange={this.handleChange} name="type">
                <option value="admin">Administrator</option>
                <option value="member">Department Official</option>

             </select>
             <br/><br/><br/>

            <input type="submit" className="btn btn-primary"  value="Add"/>
            </form>
        </div>
        </div>
    
          );
    }
}   

export default withRouter(AddUser);
