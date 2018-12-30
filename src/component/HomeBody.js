import React, { Component } from "react";

class HomeBody extends Component {
  render() {
    return (
<div>
    <div>
    <div className="section-home about-us fadeIn animated">
      
      <div className="container">
      
          <div className="row">
      
              <div className="col-md-3 col-sm-6">
              
                <div className="about-us-col">
      
                      <div className="col-icon-wrapper">
                        <img src="assets/images/icons/our-mission-icon.png" alt=""/>
                      </div>
                      <h3 className="col-title">our mission</h3>
                      <div className="col-details">
      
                        <p>Identify potential donor assistance to improve facilities of underdeveloped schools in Sri Lanka</p>
                        
                      </div>
                      <a href="/About" className="btn btn-primary"> Read more </a>
                  
                </div>
                
              </div>
      
      
              <div className="col-md-3 col-sm-6">
              
                <div className="about-us-col">
      
                      <div className="col-icon-wrapper">
                        <img src="assets/images/icons/donation-icon.png" alt=""/>
                      </div>
                      <h3 className="col-title">Make donations</h3>
                      <div className="col-details">
      
                        <p>Donate now to contribute to funds that support children who live in poverty.</p>
                        
                      </div>
                      <a href="#" className="btn btn-primary"> Donate Now </a>
                  
                </div>
                
              </div>
      
      
              <div className="col-md-3 col-sm-6">
              
                <div className="about-us-col">
      
                      <div className="col-icon-wrapper">
                        <img src="assets/images/icons/success-icon.png" alt=""/>
                      </div>
                      <h3 className="col-title">success stories</h3>
                      <div className="col-details">
      
                        <p>Real stories from the schools we serve and the corporations who make our work possible.</p>
                        
                      </div>
                      <a href="/SuccessStories" className="btn btn-primary"> Read more </a>
                  
                </div>
                
              </div>
      
      
              <div className="col-md-3 col-sm-6">
              
                <div className="about-us-col">
      
                      <div className="col-icon-wrapper">
                        <img src="assets/images/icons/help-icon.png" alt=""/>
                      </div>
                      <h3 className="col-title">help and support</h3>
                      <div className="col-details">
      
                        <p>Feed us with your valueble ideas and ways you can support us</p>
                        
                      </div>
                      <a href="/Contact" className="btn btn-primary"> Contact Us </a>
                  
                </div>
                
              </div>
              
      
              
          </div>
      
      </div>
      
      </div> 
      
      <div className="section-home home-reasons">
      
      <div className="container">
      
          <div className="row">
              
              <div className="col-md-6">
      
                  <div className="reasons-col animate-onscroll fadeIn">
      
                      <img src="assets/images/reasons/we-fight-togother.jpg" alt=""/>
      
                      <div className="reasons-titles">
      
                          <h3 className="reasons-title">We rise together</h3>
                          <h5 className="reason-subtitle">Lets help them rise</h5>
                          
                      </div>
      
                      <div className="on-hover hidden-xs">
                          
                              <p> A good quality education helps children reach their full potential; however, for millions of children and youth in low-income countries, it is beyond reach. Although more children around the world are going to school than ever before, many are not learning basic skills like reading once they get there.</p>
      
      
                              <p> Our programs ensure that young children survive and thrive – physically and emotionally – and ready them for school success.</p>
      
      
                              
                      </div>
                  </div>
                  
              </div>
      
      
              <div className="col-md-6">
      
                  <div className="reasons-col animate-onscroll fadeIn">
      
                      <img src="assets/images/reasons/we-care-about.jpg" alt=""/>
      
                      <div className="reasons-titles">
      
                          <h3 className="reasons-title">WE care about others</h3>
                          <h5 className="reason-subtitle">We are humans</h5>
                          
                      </div>
      
                      <div className="on-hover hidden-xs">
                          
                              <p>  To really change the world, we have to help people change the way see things. Global betterment is a mental process, not one that requires huge sums of money or a high level of authority. Change has to be psychological. So if you want to see real change, stay persistent in educating humanity on how similar we all are than different. </p>
      
      
                              <p> Don’t only strive to be the change you want to see in the world, but also help all those around you see the world through commonalities of the heart so that they would want to change with you. This is how humanity will evolve to become better. This is how you can change the world. The language of the heart is mankind’s main common language.</p>
      
                              
                      </div>
      
      
                  </div>
                  
              </div>
      
      
          </div>
        
      
      
      </div>
      
      
      </div> 
    </div>

      <div className="section-home our-sponsors animate-onscroll fadeIn">
        <div className="container">
          <h2 className="title-style-1">
            Our Sponsors <span className="title-under" />
          </h2>

          <ul className="owl-carousel list-unstyled list-sponsors">
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 1.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 2.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 3.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 1.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 2.png" alt="" />
            </li>

            <li>
              {" "}
              <img src="assets/images/sponsors/logo 3.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 1.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 2.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 3.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/logo 2.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default HomeBody;
