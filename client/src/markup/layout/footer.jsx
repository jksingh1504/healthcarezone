import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/logo-light.webp';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
import facebook from '../../images/social/facebook.png';
import twitter from '../../images/social/twitter.png';
import instagram from '../../images/social/instagram.png';
import linkedin from '../../images/social/linkedin.png';

class aboutSection extends Component {
	render() {
		return (
			<>

				<footer className="footer" style={{ backgroundImage: "url(" + footerBg + ")" }}>
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={Logo} alt="" /></Link>
										</div>
										<div className="ft-contact">
											<h4>Our Vision</h4>
											<p>We strive to provide best quality and affordable health service to rural and urban people.</p>
											<div className="contact-bx">
												<div className="icon"><i className="fas fa-phone-alt"></i></div>
												<div className="contact-number">
													<span>Contact Us</span>
													<h4 className="number">+91 8888073108</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget ml-50">
										<h3 className="footer-title">Quick Links</h3>
										<ul>
											<li><Link to="/about-us"><span>About Us</span></Link></li>
											<li><Link to="/services"><span>Services</span></Link></li>
											<li><Link to="/booking"><span>Booking</span></Link></li>
											<li><Link to="/faq"><span>Faq's</span></Link></li>
											<li><Link to="/blog-grid"><span>Blogs</span></Link></li>
											<li><Link to="/team"><span>Out Team</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget">
										<h3 className="footer-title">Our Service</h3>
										<ul>
											<li><Link to="/service-detail"><span>Hospital</span></Link></li>
											<li><Link to="/service-detail"><span>Medical</span></Link></li>
											<li><Link to="/service-detail"><span>Pathological Laboratories</span></Link></li>
											<li><Link to="/service-detail"><span>Ambulance</span></Link></li>
											<li><Link to="/service-detail"><span>Blood Banks</span></Link></li>
										</ul>

									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_form">
										<h3 className="footer-title">Subcribe</h3>
										<form className="subscribe-form subscription-form mb-30">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email" />
											</div>
											<button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100">Subscribe Now</button>
										</form>
										<div className="footer-social-link">
											<ul>
												<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={facebook} alt="" /></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={twitter} alt="" /></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={instagram} alt="" /></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer-bottom">
							<div className="row">
								<div className="col-12 text-center">
									<p className="copyright-text">Copyright © 2024 Design & Developed by<a href="https://themeforest.net/user/pranav" rel="noreferrer" target="_blank" className="text-secondary"> HEALTH CARE ZONE</a></p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt="" />
					<img className="pt-img2 animate1" src={ptImg2} alt="" />
					<img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
					<img className="pt-img4 animate-wave" src={ptImg4} alt="" />
				</footer>

			</>
		);
	}
}

export default aboutSection;