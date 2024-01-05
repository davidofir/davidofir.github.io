import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Certification from "../components/certifications/certification";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/certifications.css";
import myCertifications from "../data/certifications";

const Certifications = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "certifications");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Certifications | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="certifications" />
				<div className="content-wrapper">
					<div className="certifications-logo-container">
						<div className="certifications-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="certifications-main-container">

						<div className="certifications-container">
							<div className="certifications-wrapper">
								{myCertifications.map((certification, index) => (
									<div
										className="certifications-certification"
										key={(index + 1).toString()}
									>
										<Certification
											key={(index + 1).toString()}
											date={certification().date}
											title={certification().title}
											img_source={ certification().img_source}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certifications;
