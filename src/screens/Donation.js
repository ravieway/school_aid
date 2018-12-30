import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DonateForm from "../component/DonateForm";
import Header from "../component/Header";
import Footer from "../component/Footer";
import DonationInfoCard from "../component/DonationInfoCard";
import { dummyDonationData } from "../dummy_data/DonationData";
import SendImage from "../component/SendImage";
import Axios from "axios";
import { GET_CAUSES } from "../constants";
class Donation extends Component {
  constructor(props){
    super(props);

    this.state = {
      causes: []
    }
  }

  renderdonationCards = data => {
    return data.map(ele => {
      return (
        <DonationInfoCard
          key={ele._id}
          id={ele._id}
          image={ele.image}
          total={ele.total}
          current={ele.money}
          name={ele.name}
          school={ele.schoolName}
          district={ele.district}
          province={ele.province}
          causeCode={ele.causeId}
        />
      );
    });
  };

  componentWillMount(){
    Axios.post(GET_CAUSES, {userName: localStorage.getItem("userName"), password: localStorage.getItem("password"), type: localStorage.getItem("type")}).then(res => {
      this.setState({
        causes: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <Header active="causes"/>
        </div>

        <div style={{ paddingTop: 60 }}>
          {/* <DonateForm/> */}
          {/* <DonationInfoCard/> */}
          {this.renderdonationCards(this.state.causes)}
        </div>
        <div>.</div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Donation);
