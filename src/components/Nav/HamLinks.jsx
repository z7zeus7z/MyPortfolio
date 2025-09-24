import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../../Styles/Nav.module.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HamLinks = (props) => {
    const {isOpen,toggleOpen,theme} = props;
        const menuOpen = isOpen ?  "":classes.hide;

  return (
   <>
      <div className={`${classes.hamLinks} ${theme} ${menuOpen}  `}>
        <div onClick={toggleOpen} className={classes.hamClose}><FontAwesomeIcon icon={faXmark}/></div>
        <div className={classes.links}>
            <ul>
                <li><a onClick={toggleOpen} href="#home">Home</a></li>
                <li><a onClick={toggleOpen} href="#about">About</a></li>
                <li><a onClick={toggleOpen} href="#projects">Projects</a></li>
                <li><a onClick={toggleOpen} href="#contacts">Contact</a></li>
            </ul>
        </div>
      </div>
   </>
  )
}

export default HamLinks