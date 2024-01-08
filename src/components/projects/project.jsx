import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import MediaDisplay from './MediaDisplay'; 
import "./styles/project.css";
import { Modal, Button } from 'react-bootstrap';
const Project = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { logo, title, description, linkText, link, videoUrl, imageUrls, frameworks,languages,features } = props;
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
      <React.Fragment>
          <div className="project">
              <div className="media-display">
                  <MediaDisplay videoUrl={videoUrl} imageUrls={imageUrls} />
              </div>
              <div className="text-container">
                  <h5 className="project-title">{title}</h5>
                  <p className="project-description">{`Frameworks: ${frameworks}`}</p>
                  <p className="project-description">{`Languages: ${languages}`}</p>
                  <p className="project-description">{description}</p>
                  <div className="project-buttons">
                    <div>
                      <Button variant="primary" onClick={handleShow}>
                          View Features
                      </Button>
                    </div>
                    <div>
                      <Link to={link} className="project-link">
                          <FontAwesomeIcon icon={faLink} className="mr-2" />
                          {linkText}
                      </Link>
                    </div>
                    </div>
              </div>
          </div>
          <Modal show={showModal} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                      Features of {title}
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <ul>
                      {features.map((feature, index) => (
                          <li key={index}>{feature}</li> 
                      ))}
                  </ul>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </React.Fragment>
  );
};

export default Project;
