import React, { Component } from 'react';

// Import Images
import teamMember1 from '../../images/team/member1.jpg';
import teamMember2 from '../../images/team/member2.jpg';
import teamMember3 from '../../images/team/member3.jpg';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-dots-orange.png';
import ptImg3 from '../../images/shap/line-circle-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';
import ptImg5 from '../../images/shap/circle-dots.png';

class TeamSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp3 team-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h2 className="title">Meet Our Team</h2>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="team-member">
									<div className="team-media">
										<img src={teamMember1} alt=""/>
									</div>
									<div className="team-info">
										<div className="team-info-comntent">
											<h4 className="title">Dr. Addition Smith</h4>
											<span className="text-secondary">Dentist</span>
										</div>
										<ul className="social-media">
											<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
											<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
											<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="team-member active">
									<div className="team-media">
										<img src={teamMember2} alt=""/>
									</div>
									<div className="team-info">
										<div className="team-info-comntent">
											<h4 className="title">Dr. Mahfuz Riad</h4>
											<span className="text-secondary">Chiropractor</span>
										</div>
										<ul className="social-media">
											<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
											<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
											<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="team-member">
									<div className="team-media">
										<img src={teamMember3} alt=""/>
									</div>
									<div className="team-info">
										<div className="team-info-comntent">
											<h4 className="title">Dr. David Benjamin</h4>
											<span className="text-secondary">Cardiologist</span>
										</div>
										<ul className="social-media">
											<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
											<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
											<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
					<img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
				</section>
				
			</>
		);
	}
}

export default TeamSection;