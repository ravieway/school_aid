import React, { Component } from 'react';
import MemberCard from "../component/MemberCard";


class MemberTable extends Component {
    render() {
      return (
        <div>
            <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th style={{width:30}}>Username</th>
                        <th style={{width:70}}>E-mail</th>
                        <th style={{width:50}}>Password</th>
                        <th style={{width:200}}></th>

                      </tr>
                    </thead>
                  </table>
                  <MemberCard/>
                </div>
        </div>
      );
    }
  }
  
  export default MemberTable;