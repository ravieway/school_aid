import React, { Component } from "react";
import Header from "../component/Header";
import CauseTable from "../component/CauseTable";
import MemberTable from "../component/MemberTable";
import AddCauses from "../component/AddCauses";
import AddUser from "../component/AddUser";
import Axios from "axios";
import { USER_LIST, GET_CAUSES } from "../constants";

class AdminPanel extends Component {
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
    }else if(this.state.active === "view_members"){
      return <MemberTable users={this.state.users}/>
    }else if(this.state.active === "add_members"){
      return <AddUser />
    }
  }

  changeActive = (type) => {
    this.setState({
      active: type
    })
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
                  <li onClick={() => this.changeActive("view_causes")} className={this.state.active === "view_causes" ? "active" : ""} >
                    <a>
                      View Causes <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li onClick={() => this.changeActive("add_causes")} className={this.state.active === "add_causes" ? "active" : ""}>
                    <a >Add Cause</a>
                  </li>
                  <li onClick={() => this.changeActive("view_members")} className={this.state.active === "view_members" ? "active" : ""}>
                    <a>View Members</a>
                  </li>
                  <li onClick={() => this.changeActive("add_members")} className={this.state.active === "add_members" ? "active" : ""}>
                    <a>Add Member</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">Admin Dashboard</h1>

                {this.renderBoards()}
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
