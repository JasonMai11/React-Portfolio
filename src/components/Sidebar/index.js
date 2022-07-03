import './index.scss'
import LogoSubtitle from '../../assets/images/jason-sub.png'
import anya from '../../assets/images/bojiirungif.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBattleNet, faChrome, faHackerrank, faSwift } from '@fortawesome/free-brands-svg-icons' //
import { faCertificate, faHome, faPaperPlane, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className = "nav-bar">
            <Link className = "logo" to="/">
                <img src={anya} alt="logo" />
                <img className="sub-logo" src = {LogoSubtitle} alt="Jason" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faPaperPlane} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="SkillsCertificates-link" to="/SkillsCertificates">
                    <FontAwesomeIcon icon={faCertificate} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
            </nav>
        <ul>
            <li>
                <a target = "_blank" rel = 'noreferrer' href = 'https://www.linkedin.com/in/jason-mai-460583196/'>
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = 'noreferrer' href = 'https://github.com/JasonMai11'>
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = 'noreferrer' href = 'https://www.instagram.com/j.fuhh/'>
                    <FontAwesomeIcon icon = {faInstagram} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = 'noreferrer' href = 'https://twitter.com/FuhPho'>
                    <FontAwesomeIcon icon = {faTwitter} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = 'noreferrer' href = 'https://www.twitch.tv/fuhpho'>
                    <FontAwesomeIcon icon = {faTwitch} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
        </div>
    );
}

export default Sidebar