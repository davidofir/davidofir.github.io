import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/certification.css";

const Certification = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-certification">
				<div className="homepage-certification-content">
					<div className="homepage-certification-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-certification-title">{title}</div>
					<div className="homepage-certification-description">
						{description}
					</div>
					<div className="homepage-certification-link">
						<Link to={link}>
							Read certification{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certification;
