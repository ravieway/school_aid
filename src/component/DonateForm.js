import React, { Component } from "react";

class DonateForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            causeId: "",
            amount: "",
            fName: "",
            lName: "",
            email: "",
            phone: "",
            nic: "",
            additionalNote: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 

    onClick = (event) => {
        event.preventDefault();

        console.log(this.state)
    }

  render() {
    return (
      <div className="row">
        <form className="form-donation col-md-6 col-md-offset-3">
          <h3 className="title-style-1 text-center">
            Thank you for your donation <span className="title-under" />{" "}
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
                placeholder="Cause ID"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12 ">
              <input
                onChange={e=> {this.onChange(e)}}
                name = "amount"
                value = {this.state.amount}
                type="text"
                className="form-control"
                id="amount"
                placeholder="AMOUNT(Rs)"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <input
                onChange={e=> {this.onChange(e)}}
              name = "fName"
              value = {this.state.fName}
                type="text"
                className="form-control"
                placeholder="First name*"
              />
            </div>

            <div className="form-group col-md-6">
              <input
              onChange={e=> {this.onChange(e)}}
              name = "lName"
              value = {this.state.lName}
                type="text"
                className="form-control"
                placeholder="Last name*"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <input
              onChange={e=> {this.onChange(e)}}
              name = "email"
              value = {this.state.email}
                type="text"
                className="form-control"
                placeholder="Email*"
              />
            </div>

            <div className="form-group col-md-6">
              <input
              onChange={e=> {this.onChange(e)}}
              name = "phone"
              value = {this.state.phone}
                type="text"
                className="form-control"
                placeholder="Phone"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12">
              <input
              onChange={e=> {this.onChange(e)}}
              name = "nic"
              value = {this.state.nic}
                type="text"
                className="form-control"
                placeholder="NIC"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12">
              <textarea
              onChange={e=> {this.onChange(e)}}
              name = "additionalNote"
              value = {this.state.additionalNote}
                cols="30"
                rows="4"
                className="form-control"
                placeholder="Additional note"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12">
              <button
                onClick ={(event) => this.onClick(event)}
                type="submit"
                className="btn btn-primary pull-right"
                name="donateNow"
              >
                DONATE NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DonateForm;
