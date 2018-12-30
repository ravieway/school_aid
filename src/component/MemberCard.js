import React, { Component } from "react";
import Axios from "axios";
import { DELETE_USER } from "../constants";

class MemberCard extends Component {

  deleteUser = (id) => {
    Axios.post(DELETE_USER, {id, userName: localStorage.getItem("userName"), password: localStorage.getItem("password"), type: localStorage.getItem("type")}).then(res => {
      window.location.reload();
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td style={{width:175}}>{this.props.userName}</td>
                        <td style={{width:200}}>{this.props.email}</td>
                        <td style={{width:100}}>{this.props.password}</td>
                        <td >
                        {/* <input type="submit" value="Edit"/> */}
                        <input onClick={() => this.deleteUser(this.props.id)} type="submit" value="Delete"/>
                        </td>
                      </tr>
                    </tbody>
                  </table>  
                </div>       
      </div>
    );
  }
}

export default MemberCard;