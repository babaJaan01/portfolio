import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logofull.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

// if you want to add more socials, just copy paste the <li> </li> section and change the href and faIcon
const Sidebar = () => (
    
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="shayaan"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/"> 
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                <FontAwesomeIcon icon = {faSuitcase} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = 'noreferrer' href='https://www.linkedin.com/in/shayaan-tanveer/'>
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar