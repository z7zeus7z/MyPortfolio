import classes from '../../Styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from '@fortawesome/free-regular-svg-icons'

const Switch = (props) => {
    const {theme,setTheme} = props;
    const iCon = theme ==='lightPrimary' ?faMoon : faSun
  return (
    <>
    <div></div>
    <FontAwesomeIcon className={classes.switch} onClick={setTheme}  icon={iCon}/>
    </>
)
}

export default Switch