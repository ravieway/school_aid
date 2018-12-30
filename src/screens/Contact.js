import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <Header active="contact"/>
        </div>

	<div class="page-heading text-center">

<div class="container zoomIn animated">
    
    <h1 class="page-title">CONTACT US <span class="title-under"></span></h1>

</div>

</div>

<div class="main-container fadeIn animated">

<div class="container">

    <div class="row">

        <div class="col-md-7 col-sm-12 col-form">

            <h2 class="title-style-2">CONTACT FORM <span class="title-under"></span></h2>

            <form action="" class="contact-form ajax-form">

                <div class="row">

                    <div class="form-group col-md-6">
                        <input type="text" name="name" class="form-control" placeholder="Name*" required/>
                    </div>

                     <div class="form-group col-md-6">
                        <input type="email" name="email" class="form-control" placeholder="E-mail*" required/>
                    </div>
                    
                </div>

                <div class="form-group">
                    <textarea name="message" rows="5" class="form-control" placeholder="Message*" required></textarea>
                </div>

                <div class="form-group alerts">
                
                    <div class="alert alert-success" role="alert">
                      
                    </div>

                    <div class="alert alert-danger" role="alert">
                      
                    </div>
                    
                </div>	

                 <div class="form-group">
                    <button type="submit" class="btn btn-primary pull-right">Send message</button>
                </div>

                <div class="clearfix"></div>

            </form>

        </div>

        <div class="col-md-4 col-md-offset-1 col-contact">

            <h2 class="title-style-2"> SChoolAID CONTACTS <span class="title-under"></span></h2>
            <div class="contact-items">

                <ul class="list-unstyled contact-items-list">
                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-map-marker"></i></span> Department of Education, Sri Lanka</li>
                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-phone"></i></span> +94 11 2 000 000</li>

                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-envelope"></i></span> contact@schooaid.org</li>
                </ul>
            </div>

            
            
        </div>

    </div> 


</div>



</div>

<div class="contact-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63372.35629737595!2d79.85622039385112!3d6.917807128467884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7203be66ee3c329!2sMinistry+of+Education+Isurupaya!5e0!3m2!1sen!2slk!4v1546067290712" width="100%" height="350" frameborder="0"  allowfullscreen/>
</div>




 


        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
