import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="educations-body">
						<div className="top-education">
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
								<li>Courses: Software Engineering, Enterprise Software Development, Data Structures & Algorithms</li>
								</ul>
								</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
