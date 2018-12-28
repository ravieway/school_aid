import React, {Component} from "react";

class DonationInfoCard extends Component{
    render(){
        return(
            <div className="col-md-3 col-sm-6">
      
                  <div className="cause">
      
                      <img src={this.props.image} alt="" className="cause-img"/>
      
                      <div className="progress cause-progress">
                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: (this.props.current/this.props.total*100).toString() + "%"}}>
                          Rs.{this.props.current} / Rs.{this.props.total}
                        </div>
                      </div>
      
                      <h4 className="cause-title"><a href="#">{this.props.name}</a></h4>
                      <div className="cause-details">
                        <br/>{this.props.school}<br/>{this.props.district}<br/>{this.props.province}<br/>Cause code:{this.props.causeCode}
                      </div>
      
                      <div className="btn-holder text-center">
      
                        <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#donateModal"> DONATE NOW</a>
                        
                      </div>
                  </div>
              </div>
        )
    }
}

export default DonationInfoCard;