import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import MediaDisplay from './MediaDisplay'; 
import "./styles/project.css";

const Project = (props) => {
    const { logo, title, description, linkText, link, videoUrl, imageUrls, frameworks,languages } = props;
    return (
        <React.Fragment>
            <div className="col-md-4 col-lg-4 mb-4">
                <div className="card custom-card-style">
                    <div className="project-logo">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Frameworks: {frameworks}</p>
						<p className="card-text">Languages: {languages}</p>
                        <MediaDisplay videoUrl={videoUrl} imageUrls={imageUrls} />
                        
                        <p className="card-text">{description}</p>
                        
                        <Link to={link} className="card-link">
                            <FontAwesomeIcon icon={faLink} className="mr-2" />
                            {linkText}
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
