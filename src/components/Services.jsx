import React from "react";
import { pageServices } from "../Data/PageData";
import Header from "./Header";

const Services = () => {
	return (
		<React.Fragment>
			<section className="section services" id="services">
				<Header pageTitle="our" pageSubTitle="services" />
				<div className="section-center services-center">
					{pageServices.map((service) => {
						return (
							<article className="service" key={service.id}>
								<span className="service-icon"><i className={service.icon}></i></span>
								<div className="service-info">
									<h4 className="service-title">{service.title}</h4>
									<p className="service-text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Asperiores, officia.
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</React.Fragment>
	);
}

export default Services;