import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import DonateForm from "../component/DonateForm"
import DonationInfoCard from "../component/DonationInfoCard"
import { dummyDonationData } from "../dummy_data/DonationData";
import SendImage from "../component/SendImage";
class Donation extends Component{
    onH1Click = () =>{
        this.props.history.push("/");
    }

    renderdonationCards = data => {
        return data.map(ele => {
            return(
                <DonationInfoCard key={ele.causeCode} image={ele.image} total={ele.total} current={ele.current} name={ele.name} school={ele.school} district={ele.district} province={ele.province} causeCode={ele.causeCode}/>
            )
        })
    }

    render(){
        return(
            <div>
                {/* <DonateForm/> */}
                {/* <DonationInfoCard/> */}
                {this.renderdonationCards(dummyDonationData)}
                <SendImage/>
            </div>
        )
    }
}

export default withRouter(Donation);