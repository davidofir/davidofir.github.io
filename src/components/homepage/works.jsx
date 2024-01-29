import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 75 }
	  };
	return (
	  <div className="works">
		<Card
		  icon={faBriefcase}
		  title="Work"
		  body={
			<div className="works-body">
				<motion.div
				    initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.25 }}
					variants={variants}
				>
			  {/* Naryant, Osteoporosis Canada + CMI */}
			  <div className="work">
				<img
				  src={process.env.PUBLIC_URL + '/naryant_logo.jpeg'}
				  alt="Naryant"
				  className="work-image"
				/>
				<div className="work-content">
				  <div className="work-title">Naryant, Osteoporosis Canada + CMI</div>
				  <div className="work-subtitle">Machine Learning Intern</div>
				</div>
				<div className="work-duration">May 2023 – August 2023</div>
			  </div>
			  <div className="work-responsibilities">
                                <ul>
                                <li>Developed an automatic dependency resolution script for Python, saving weeks in the pipeline’s setup.</li>
                                <li>Built a tool that compares multiple Survival-Analysis models and returns the best models, enhancing the efficiency and ease of selecting the most suitable model.</li>
								<li>Applied analytical skills to assess the impact of removing certain features on the accuracy of the model.</li>
                                <li>Reported findings to non-technical domain experts, demonstrating communication skills.</li>
								</ul>
                                </div>
			  
			  {/* CloudDX + CMI */}
			  <div className="work">
				<img
				  src={process.env.PUBLIC_URL + '/cloud_dx_logo.jpeg'}
				  alt="CloudDX"
				  className="work-image"
				/>
				<div className="work-content">
				  <div className="work-title">CloudDX + CMI</div>
				  <div className="work-subtitle">Software Developer Intern</div>
				</div>
				<div className="work-duration">May 2022 – April 2023</div>
			  </div>
			  <div className="work-responsibilities">
                                <ul>
                                    <li>Swiftly troubleshooted a longstanding, complex graphing issue within hours, previously unresolved across multiple work terms, involving multi-layer debugging across React Native, Kotlin, and Arduino.</li>
                                <li>Drastically improved the backend API vital transmission response times by approximately 99% by transitioning from REST to SignalR.</li>
                                <li>Led the development of the backend API and Database using C# and ASP.NET alongside stored procedures in Microsoft SQL Server to aggregate and create custom-sized time-series queries.</li>
                                <li>Effectively transformed technical requirements into features while working in an agile environment.</li>
                                <li>Collaborated with frontend and mobile teams, to ensure seamless integration with the Web API.</li>
                                <li>Implemented unit tests and stress tests, ensuring performance and quality standards were met.</li>
                                </ul>
                                </div>
			</motion.div>
			</div>
		  }
		/>
	  </div>
	);
  };

export default Works;
