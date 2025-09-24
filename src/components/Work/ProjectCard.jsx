import classes from '../../Styles/Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const ProjectCard = (props) => {
    const {id,name,img,description,link,gitHub,theme} = props
  return (
    <>
    <div key={id} className={`${classes.projectCard} ${theme}`}>
        <div className={classes.projectImg}>
            <img src={img} alt="" />
        </div>
        <div className={classes.projectInfo}>
           <div className={classes.info}>
            <h4>{name}</h4>
            <p>{description}</p>
            </div>
            <div className={classes.links}>
                <div><FontAwesomeIcon icon={faArrowUpRightFromSquare}/><a target='_blank' href={link}>Live Demo</a></div>
                <div><FontAwesomeIcon icon={faGithub}/><a target='_blank' href={gitHub}>GitHub</a></div>
            </div>
        </div>
    </div>
    </>
)
}

export default ProjectCard