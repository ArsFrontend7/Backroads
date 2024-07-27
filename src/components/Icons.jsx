import React from "react";
import { socialLinks } from "../Data/PageData";

const Icons = () => {
	return (
		<React.Fragment>
			<ul className="nav-icons">
				{socialLinks.map((link) => {
					return (
						<li key={link.id}>
							<a href={link.url} target="_blank" className="nav-icon">
								<i className={link.icon}></i>
							</a>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
}

export default Icons;