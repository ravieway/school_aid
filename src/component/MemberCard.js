import React, { Component } from "react";

class MemberCard extends Component {
  render() {
    return (
      <div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td style={{width:175}}>Dino</td>
                        <td style={{width:200}}>dino@hags.com</td>
                        <td style={{width:100}}>qqqqqqqqqqqqq</td>
                        <td >
                        <input type="submit" value="Edit"/>
                        <input type="submit" value="Delete"/>
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