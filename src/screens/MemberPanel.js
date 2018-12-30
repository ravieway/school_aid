import React, { Component } from "react";
import Header from "../component/Header";
import CauseTable from "../component/CauseTable";
import AddCauses from "../component/AddCauses";
import { USER_LIST, GET_CAUSES } from "../constants";
import Axios from "axios";

class MemberPanel extends Component {
  constructor(props){
    super(props);

    this.state ={
      active: "view_causes",
      users: [],
      causes: []
    }
  }

  componentWillMount(){
    Axios.post(USER_LIST, {userName: localStorage.getItem("userName"), password: localStorage.getItem("password"), type: localStorage.getItem("type")}).then(res => {
      this.setState({
        users: res.data
      })
    })

    Axios.post(GET_CAUSES, {userName: localStorage.getItem("userName"), password: localStorage.getItem("password"), type: localStorage.getItem("type")}).then(res => {
      this.setState({
        causes: res.data
      })
    })
  }

  renderBoards = () => {
    if(this.state.active === "view_causes"){
      return <CauseTable causes={this.state.causes}/>
    }else if(this.state.active === "add_causes"){
      return <AddCauses/>
    }
  }

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
