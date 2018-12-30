import React, { Component } from 'react';
import DonorReqCard from "../component/DonorReqCard";



class DonorReqTable extends Component {
    render() {
      return (
        <div>
            <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th style={{width:200}}>Cause Code</th>
                        <th style={{width:200}}>Donor Name</th>
                        <th style={{width:150}}>NIC</th>
                        <th style={{width:150}}>Amount</th>
                        <th>Notes</th>
                        <th style={{width:200}}></th>
                      </tr>
                    </thead>
                    
                  </table>
                  <DonorReqCard/>
                </div>
        </div>
      );
    }
  }
  
  export default DonorReqTable;