import React, { Component } from "react";
import SendImage from "./SendImage";
import Axios from "axios";
import { ADD_CAUSE } from "../constants";

class AddCauses extends Component {

    constructor(props){
        super(props);
        this.state = {
            causeId: "",
            title: "",
            schoolName: "",
            province: "",
            district: "",
            image: "",
            additionalNote: "",
            total: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getImage = (data) => {
      this.setState({
        image: data
      })
    }
 

    onClick = (event) => {
        event.preventDefault();
        let a = this.state;
        a.total = parseInt(this.state.total);
        Axios.post(ADD_CAUSE, this.state).then(res => {
          window.location.reload();
        });
    }

  render() {
    return (
      <div className="row">
        <form className="form-donation col-md-6 col-md-offset-3">
          <h3 className="title-style-1 text-center">
            ADD NEW CAUSE <span className="title-under" />{" "}
          </h3>

          <div className="row">
            <div className="form-group col-md-12 ">
              <input
                onChange={e=> {this.onChange(e)}}
                name = "causeId"
                value = {this.state.causeId}
                type="text"
                className="form-control"
                id="cid"
                placeholder="Cause code"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12 ">
              <input
                onChange={e=> {this.onChange(e)}}
                name = "title"
                value = {this.state.amount}
                type="text"
                className="form-control"
                id="amount"
                placeholder="Title"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <input
                onChange={e=> {this.onChange(e)}}
              name = "schoolName"
              value = {this.state.fName}
                type="text"
                className="form-control"
                placeholder="School Name*"
              />
            </div>

            <div className="form-group col-md-6">
              <input
              onChange={e=> {this.onChange(e)}}
              name = "province"
              value = {this.state.lName}
                type="text"
                className="form-control"
                placeholder="Select Province*"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <input
              onChange={e=> {this.onChange(e)}}
              name = "district"
              value = {this.state.email}
                type="text"
                className="form-control"
                placeholder="Select District*"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <input
              onChange={e=> {this.onChange(e)}}
              name = "total"
              value = {this.state.total}
                type="text"
                className="form-control"
                placeholder="Total Required*"
              />
            </div>
          </div>


          <div className="row" style={{paddingLeft : 15, paddingBottom : 15}}>
          <div className="form-group col-md-12 boxborder"  >
            Add Image <br/> <SendImage getImage={(data) => this.getImage(data)}/>
            </div>
          </div>



          <div className="row">
            <div className="form-group col-md-12 " >
              <textarea
              onChange={e=> {this.onChange(e)}}
              name = "additionalNote"
              value = {this.state.additionalNote}
                cols="30"
                rows="4"
                className="form-control"
              
              />
            </div>
            

          </div>

          <div className="row">
            <div className="form-group col-md-12">
              <button
                onClick ={(event) => this.onClick(event)}
                type="submit"
                className="btn btn-primary pull-right"
                name="addCause"
              >
                ADD CAUSE
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCauses;
