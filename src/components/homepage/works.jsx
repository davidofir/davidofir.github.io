import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./naryant_logo.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Naryant, Osteoperosis Canada + CMI</div>
							<div className="work-subtitle">
								Machine Learning Intern
							</div>
							<div className="work-duration">May 2023 – August 2023</div>
						</div>
						<div className="work">
							<img
								src="./cloud_dx_logo.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">CloudDX + CMI</div>
							<div className="work-subtitle">
								Software Developer Intern
							</div>
							<div className="work-duration">May 2022 – April 2023</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
