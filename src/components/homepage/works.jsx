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
						<div className="top-work">
							<div className="work">
								<img
									src={process.env.PUBLIC_URL + '/naryant_logo.jpeg'}
									alt="naryant"
									className="work-image"
								/>
								<div className="work-title">Naryant, Osteoperosis Canada + CMI</div>
								<div className="work-subtitle">
									Machine Learning Intern
								</div>
								<div className="work-duration">May 2023 – August 2023</div>
							</div>
							<div className="work-responsibilities">
								<ul>
								<li>Used Python to build a model for elderly population risk assessment, showcasing advanced
analytical skills and the ability to communicate complex findings effectively.</li>
								<li>Communicated intricate findings to domain experts, reflecting strong technical communication abilities.</li>
								</ul>
								</div>
						</div>
						<div className="top-work">
							<div className="work">
								<img
									src={process.env.PUBLIC_URL + '/cloud_dx_logo.jpeg'}
									alt="cloud_dx"
									className="work-image"
								/>
								<div className="work-title">CloudDX + CMI</div>
								<div className="work-subtitle">
									Software Developer Intern
								</div>
								<div className="work-duration">May 2022 – April 2023</div>
							</div>
							<div className="work-responsibilities">
								<ul>
									<li>Swiftly resolved a longstanding, complex graphing issue within hours, previously unresolved across
multiple work terms, involving multi-layer debugging across React Native, Kotlin, and an Arduino.</li>
								<li>Improved the API vital transmission response times by approximately 99% by transitioning from REST to
SignalR</li>
								<li>Developed the API and Database using C# and ASP.NET alongside stored procedures in Microsoft SQL
Server to aggregate and create custom-sized time-series queries.</li>
								<li>Effectively transformed technical requirements into features while working in an agile environment.</li>
								<li>Collaborated with frontend and mobile teams, to ensure seamless integration with the Web API.</li>
								<li>Implemented unit tests and stress tests, ensuring performance and quality standards were met.</li>
								</ul>
								</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
