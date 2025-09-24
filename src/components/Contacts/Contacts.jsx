import classes from '../../Styles/Contacts.module.css'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import CTA from '../CTA'
const Contacts = (props) => {
    const {id,theme} = props
    
  return (
    <>
    <div id={id} className={`${classes.contactsContainer} ${theme}`}>
        <div className='contentContainer'>
            <div className={classes.mainContainer}>
                 <ContactForm theme={theme}/>
          <div className={classes.links}>
            <div className={classes.icon}><FontAwesomeIcon icon={faPhone}/><p>: +962778980355</p></div>
            <div className={classes.icon}><FontAwesomeIcon icon={faEnvelope}/><p>: Zaidsabbah89@gmail.com</p></div>
            <div className={classes.icon}><FontAwesomeIcon icon={faLinkedin}/><a href="">: "fasfasfasfsf"</a></div>
             <div className={classes.CV}><CTA download="Zaid_Sabbah-CV.pdf" link="./Zaid_Sabbah-CV.pdf"   text="Download CV"/></div>
          </div>
          
           
            </div>
         
        </div>
    </div>
    </>
)
}


    


export default Contacts