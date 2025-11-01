import style from '../Styles/slider.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
const Slider = (props) => {
  const{theme}= props
  const toggleTheme = theme==="lightPrimary"? "lightSecondary":'darkSecondary'
  return (
    <>
    <div className={`${style.logos} ${toggleTheme}`}>
      <div className={style.logosSlide}>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faReact}/>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faCss3Alt}/>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faHtml5}/>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faNodeJs}/>
      </div>
      <div className={style.logosSlide}>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faReact}/>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faCss3Alt}/>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faHtml5}/>
          <FontAwesomeIcon className={style.icon} size='4x'   icon={faNodeJs}/>
      </div>
    </div>
    </>  
)
}

export default Slider