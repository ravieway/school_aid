import React, { Component } from "react";
import Header from "../component/Header";
import CauseTable from "../component/CauseTable";
import MemberTable from "../component/MemberTable";
import AddCauses from "../component/AddCauses";

class MemberPanel extends Component {
  render() {
    return (
      <div>
          <div className="navbarmod">
              <Header/>
          </div>

        <div style={{paddingTop : 65}}>
          <div className="container-fluid">
            <div className="row"  >
              <div className="col-sm-1 col-md-2 sidebar" >
                <ul className="nav nav-sidebar">
                  <li className="active" >
                    <a href="#">
                      View Causes <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Add Cause</a>
                  </li>
                  <li>
                    <a href="#">Donation Requests</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">Member Dashboard</h1>

                <CauseTable/>
 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberPanel;
