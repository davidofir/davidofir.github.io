import React from "react";

import "./style/certification.css";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
const Certification = (props) => {
	const { date, title, img_source } = props;
	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 75 }
	  };
	return (
		<React.Fragment>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.25 }}
				variants={variants}>
				<div className="certification">

						<div className="certification-left-side">

					</div>
					<div className="certification-right-side">
							<div className="certification-title">{title}</div>
							<img className="certification-image" src={ img_source}/>
							<div className="certification-date">{date}</div>
						</div>
				</div>
			</motion.div>
		</React.Fragment>
	);
};

export default Certification;
