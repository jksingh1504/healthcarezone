import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp5 work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:" no-repeat", backgroundPosition: "center", backgroundSize: "100%"}}>
					<div className="container-sm">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Working Process</h6>
							<h2 className="title">How we works?</h2>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">01</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Make Appointmnet</h5>
										<p>It is a long established fact that a reader will be distracted by the readable content of.</p>
									</div>
									<Link to="/booking" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx active">
									<div className="work-num-bx">02</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Take Treatment</h5>
										<p>It is a long established fact that a reader will be distracted by the readable content of.</p>
									</div>
									<Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">03</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Registration</h5>
										<p>It is a long established fact that a reader will be distracted by the readable content of.</p>
									</div>
									<Link to="/contact-us" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate3" src={ptImg3} alt=""/>
				</section>
				
			</>
		);
	}
}

export default aboutSection;