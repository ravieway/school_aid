import React, {Component} from "react";

class DonationInfoCard extends Component{
    render(){
        return(
            <div class="col-md-3 col-sm-6">
      
                  <div class="cause">
      
                      <img src={this.props.image} alt="" class="cause-img"/>
      
                      <div class="progress cause-progress">
                        <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: (this.props.current/this.props.total*100).toString() + "%"}}>
                          Rs.{this.props.current} / Rs.{this.props.total}
                        </div>
                      </div>
      
                      <h4 class="cause-title"><a href="#">{this.props.name}</a></h4>
                      <div class="cause-details">
                        <br/>{this.props.school}<br/>{this.props.district}<br/>{this.props.province}<br/>Cause code:{this.props.causeCode}
                      </div>
      
                      <div class="btn-holder text-center">
      
                        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#donateModal"> DONATE NOW</a>
                        
                      </div>
                  </div>
              </div>
        )
    }
}

export default DonationInfoCard;