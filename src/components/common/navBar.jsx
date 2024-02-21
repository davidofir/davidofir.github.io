import React,{useState} from "react";
import { Link } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="menu-icon" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className={`nav-background`}>
                        <ul className="nav-list">
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className={active === "certifications" ? "nav-item active" : "nav-item"}>
                                <Link to="/certifications">Certifications</Link>
                            </li>
                            <li className={active === "contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
