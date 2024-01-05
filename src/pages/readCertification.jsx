import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myCertifications from "../data/certifications";

import "./styles/readCertification.css";

let CertificationStyle = styled.div``;

const ReadCertification = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const certification = myCertifications[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [certification]);

	CertificationStyle = styled.div`
		${certification().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${certification().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={certification().description} />
				<meta name="keywords" content={certification().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-certification-logo-container">
						<div className="read-certification-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-certification-container">
						<div className="read-certification-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-certification-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-certification-wrapper">
							<div className="read-certification-date-container">
								<div className="read-certification-date">
									{certification().date}
								</div>
							</div>

							<div className="title read-certification-title">
								{certification().title}
							</div>

							<div className="read-certification-body">
								<CertificationStyle>{certification().body}</CertificationStyle>
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

export default ReadCertification;
