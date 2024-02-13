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
			  <div className="work">
				<img
				  src={process.env.PUBLIC_URL + '/Osteoporosis_Canada.jpeg'}
				  alt="Osteoporosis Canada"
				  className="work-image"
				/>
				<div className="work-content">
				  <div className="work-title">Osteoporosis Canada</div>
				  <div className="work-subtitle">ML Developer Intern</div>
				</div>
				<div className="work-duration">May 2023 – August 2023</div>
			  </div>
			  <div className="work-responsibilities">
                                <ul>
                                <li>Developed an automatic dependency resolution script for Python, saving weeks in the pipeline’s setup.</li>
                                <li>Built a multi-model Survival-Analysis comparison tool that returns the highest-rated models, enhancing the efficiency and ease of selecting the most suitable model.</li>
								<li>Incorporated multithreading, reducing execution times by over 75%.</li>
								<li>Used analytical skills to assess the impact of removing certain features on the accuracy of the model.</li>
                                <li>Reported findings to stakeholders, demonstrating communication skills.</li>
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
				  <div className="work-title">CloudDX</div>
				  <div className="work-subtitle">Software Developer Intern</div>
				</div>
				<div className="work-duration">May 2022 – April 2023</div>
			  </div>
			  <div className="work-responsibilities">
                                <ul>
                                <li>Led the development of the Back End API and database in C# and ASP.NET, optimizing SQL Server processes for scalable data aggregation and query handling.</li>
                                <li>Applied performance optimizations to the Back End’s time-series bucketing algorithms, resulting in up to 300% performance improvement.</li>
                                <li>Resolved system integration issues by using numerous debugging methods involving multilayered logs from interconnected React Native, Kotlin, and Arduino applications.</li>
                                <li>Effectively transformed technical requirements into features while working in an agile environment.</li>
                                <li>Ensured seamless end-to-end integration with client apps with the Back-End web API through close collaboration with Front-End and Mobile teams.</li>
                                <li>Conducted unit testing and stress testing, ensuring scalability and compliance with quality standards.</li>
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
