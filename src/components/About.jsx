import React from "react";
import Header from "./Header";
import aboutImage from '/assets/images/about.jpeg';

const About = () => {
	return (
		<React.Fragment>
			<section className="section" id="about">
				<Header pageTitle="about" pageSubTitle="us" />

				<div className="section-center about-center">
					<div className="about-img">
						<img
							src={aboutImage}
							className="about-photo"
							alt="awesome beach"
						/>
					</div>
					<article className="about-info">
						<h3>explore the difference</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
							quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
							unde dolor?
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
							quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
							unde dolor?
						</p>
						<a href="#" className="btn">read more</a>
					</article>
				</div>
			</section>
		</React.Fragment>
	);
}

export default About;