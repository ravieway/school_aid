    import React, { Component } from "react";

class CauseCard extends Component {
  render() {
    return (
      <div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td style={{width:95}}>1,001</td>
                        <td style={{width:250}}>Building Materials Needed</td>
                        <td style={{width:280}}>Hemmathagama Central college</td>
                        <td style={{width:15}}>qqqqqqqqqqqqq</td>
                        <td >qqqqqqqqqqqqqq</td>
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

export default CauseCard;
