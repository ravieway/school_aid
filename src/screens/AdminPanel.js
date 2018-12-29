import React, { Component } from "react";
import Header from "../component/Header";
import CauseTable from "../component/CauseTable";
import MemberTable from "../component/MemberTable";

class AdminPanel extends Component {
  render() {
    return (
      <div>
          <div>
              <Header/>
          </div>

        <div >
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
                    <a href="#">View Members</a>
                  </li>
                  <li>
                    <a href="#">Add Member</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">Admin Dashboard</h1>


                  <MemberTable/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
