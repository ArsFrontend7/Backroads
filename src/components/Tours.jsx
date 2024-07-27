import React from "react";
import { pageCards } from "../Data/PageData";
import Header from "./Header";

const Tours = () => {
	return (
		<React.Fragment>
			<section className="section" id="tours">
				<Header pageTitle="featured" pageSubTitle="tours" />
				<div className="section-center featured-center">
					{pageCards.map((card) => {
						return (
							<article className="tour-card" key={card.id}>
								<div className="tour-img-container">
									<img src={card.image} className="tour-img" />
									<p className="tour-date">{card.date}</p>
								</div>
								<div className="tour-info">
									<div className="tour-title">
										<h4>{card.title}</h4>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
										vitae tempore voluptatum maxime reprehenderit eum quod
										exercitationem fugit, qui corporis.
									</p>
									<div className="tour-footer">
										<p>
											<span><i className="fas fa-map"></i></span> {card.location}
										</p>
										<p>{card.duration} days</p>
										<p>from ${card.cost}</p>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</React.Fragment>
	);
}

export default Tours;