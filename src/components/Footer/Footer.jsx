import classes from "../../Styles/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = (props) => {
    const {theme} = props
    const toggleTheme = theme==="lightPrimary"? "lightSecondary":'darkSecondary'
  return (
    <>
        <div className={`${classes.footerContainer} ${toggleTheme}`}>
            <div className={classes.contentContainer}>
                <div>
                    <div className={classes.info}>
                        <div className={classes.logo}><h3>&lt;<span>ZEUS</span>/&gt;</h3></div>
                        <p>React Developer passionate about building modern web applications and creating exceptional user experiences.</p>
                    </div>
                    <div className={classes.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contacts">Contact</a></li>
                        </ul>
                    </div>
                    <div className={classes.contact}>
                        <h4>Connect With Me</h4>
                        <div className={classes.icon}>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            <FontAwesomeIcon icon={faGithub}/>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                    </div>
                    <div className={classes.rights}>
                        <hr />
                        <p>© 2025 React Developer Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer