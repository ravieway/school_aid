import React, { Component } from 'react';
import CauseCard from "../component/CauseCard";


class CauseTable extends Component {
    render() {
      return (
        <div>
            <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th style={{width:200}}>Cause Code</th>
                        <th style={{width:200}}>Title</th>
                        <th style={{width:250}}>School Name</th>
                        <th style={{width:120}}>District</th>
                        <th>Province</th>
                        <th style={{width:200}}></th>

                      </tr>
                    </thead>
                  </table>
                  <CauseCard/>
                </div>
        </div>
      );
    }
  }
  
  export default CauseTable;