import React, { Component } from 'react';
import CauseCard from "../component/CauseCard";
import AddCauses from "../component/AddCauses";


class CauseTable extends Component {
    renderCauses = data => {
      return data.map(ele => {
        return <CauseCard
          key={ele._id}
          id={ele._id}
          causeCode={ele.causeId}
          title={ele.title}
          school={ele.schoolName}
          district={ele.district}
          province={ele.province}
        />
      })
    }

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
                  {this.renderCauses(this.props.causes)}
                </div>
        </div>
      );
    }
  }
  
  export default CauseTable;