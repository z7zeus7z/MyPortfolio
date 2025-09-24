import classes from '../../Styles/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
;
const Ham = (props) => {
    const {toggleOpen} = props
        
  return (
    <>
    <div className={classes.ham}>
    <FontAwesomeIcon onClick={toggleOpen} icon={faBars}  size="lg"/>
    </div>
    </>
)
}

export default Ham