import React from "react";

import "./style/certification.css";

const Certification = (props) => {
	const { date, title, img } = props;

	return (
		<React.Fragment>
			<div className="certification">
				<div className="certification-left-side">
					<div className="certification-date">{date}</div>
				</div>

					<div className="certification-right-side">
						<div className="certification-title">{title}</div>
						
					</div>
					<img src={img}/>
			</div>
		</React.Fragment>
	);
};

export default Certification;
