import React, { Component } from "react";
import Axios from "axios";

class DonorReqCard extends Component {

  render() {
    return (
      <div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td style={{width:130}}>002</td>
                        <td style={{width:250}}>Elon Musk</td>
                        <td style={{width:175}}>932127423V</td>
                        <td style={{width:120}}>2000</td>
                        <td >I would like to donate more</td>
                      </tr>
                    </tbody>
                  </table>  
                </div>       
      </div>
    );
  }
}

export default DonorReqCard;
