import React from "react";

import "./style/certification.css";

const Certification = (props) => {
	const { date, title, img_source } = props;

	return (
		<React.Fragment>
			<div className="certification">

					<div className="certification-left-side">

				</div>
				<div className="certification-right-side">
						<div className="certification-title">{title}</div>
						<img className="certification-image" src={img_source}/>
						<div className="certification-date">{date}</div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Certification;
