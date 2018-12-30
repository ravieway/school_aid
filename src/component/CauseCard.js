    import React, { Component } from "react";
import Axios from "axios";
import { DELETE_CAUSE } from "../constants";

class CauseCard extends Component {
  deleteCause = (id) => {
    Axios.post(DELETE_CAUSE, {id, userName: localStorage.getItem("userName"), password: localStorage.getItem("password"), type: localStorage.getItem("type")}).then(data => {
      window.location.reload();
    })
  }

  render() {
    return (
      <div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td style={{width:95}}>{this.props.causeCode}</td>
                        <td style={{width:250}}>{this.props.title}</td>
                        <td style={{width:280}}>{this.props.school}</td>
                        <td style={{width:75}}>{this.props.district}</td>
                        <td style={{width:205}}>{this.props.province}</td>
                        <td >
                        {/* <input type="submit" value="Edit"/> */}
                        <input onClick={() => this.deleteCause(this.props.id)} type="submit" value="Delete"/>
                        </td>
                      </tr>
                    </tbody>
                  </table>  
                </div>       
      </div>
    );
  }
}

export default CauseCard;
