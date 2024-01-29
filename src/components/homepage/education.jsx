import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 75 }
      };
	return (
		<div className="works">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="educations-body">
						<div className="top-education">
						<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          variants={variants}
        >
                            <div class="education">
                                <img src={process.env.PUBLIC_URL + '/sheridan-logo.jpg'} alt="Education Logo" class="education-image"/>
                                <div class="education-content">
                                    <div class="education-title">Sheridan College</div>
                                    <div class="education-subtitle">Honours Bachelor of Computer Science (Mobile Computing)</div>
                                </div>
                                <div class="education-duration">September 2019 – December 2023</div>
                            </div>
							<div className="education-responsibilities">
								<ul>
                                <li>Graduated with Academic Honours award</li>
								<li>Courses: Software Engineering, Enterprise Software Development, Data Structures & Algorithms</li>
								</ul>
								</div>
				</motion.div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
