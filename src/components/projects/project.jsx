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
                        <Button variant="primary" onClick={handleShow}>
                            View Features
                        </Button>
                    </div>
                    <Link to={link} className="card-link">
                            <FontAwesomeIcon icon={faLink} className="mr-2" />
                            {linkText}
                        </Link>

                </div>
            </div>
            <Modal
  show={showModal}
  onHide={handleClose}
  size="md" 
  aria-labelledby="contained-modal-title-vcenter"
  centered 
>
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
