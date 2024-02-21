import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1706312347317.json'
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import Education from "../components/homepage/education";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 75 }
	  };
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
            setIsAnimationLoaded(true);
        }, 2000);

        return () => clearTimeout(timer);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.25 }}
									variants={variants}
								>
									<div className="title homepage-title">
										{INFO.homepage.title}
									</div>

									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description}
									</div>
								</motion.div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										{ <Lottie animationData={animationData}/>}
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedinIn}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-works">
								<Works />
							</div>
							<div className="homepage-education">
								<Education/>
							</div>
						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
