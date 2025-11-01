import classes from '../../Styles/Projects.module.css'
import ProjectCard from './ProjectCard'
import DriveSpot from '../../assets/DriveSpot.png'
import CommingSoon from '../../assets/commingSoon.jpg'
const Projects = (props) => {
    const {id,theme} = props
    const toggleTheme = theme==="lightPrimary"? "lightSecondary":'darkSecondary'
    
const projects = [
  {
    id: 1,
    name: "DriveSpot – Car Rental Web Application",
    img: DriveSpot,
    description: " Full-stack MERN project built with React, Node.js, Express, and MongoDB. Includes car browsing, filtering, image gallery, authentication, and admin dashboard – all with a sleek modern UI.",
    link:'https://drive-spot.vercel.app',
    gitHub:'https://github.com/z7zeus7z/car-rental'
  },
  {
    id: 2,
    name: "--------",
    img: CommingSoon,
    description: "A cool project is coming soon!",
    link:'https://www.youtube.com/watch?v=t4_klm-_SMs',
    gitHub:'github'
  },
  {
    id: 3,
    name: "------",
    img: CommingSoon,
    description: "A cool project is coming soon!",
    link:'https://www.youtube.com/watch?v=t4_klm-_SMs',
    gitHub:'github'
  },
  {
    id: 4,
    name: "--------------",
    img: CommingSoon,
    description: "A cool project is coming soon!",
    link:'https://www.youtube.com/watch?v=t4_klm-_SMs',
    gitHub:'github'
  }
];

  return (
    <div id={id} className={`${classes.projectContainer} ${toggleTheme}`}>
        <div className='contentContainer'>
          <div className={classes.mainContainer}>
            <div className={classes.title}><h3>Projects</h3></div>
            <div className={classes.ProjectCards}>
              {projects.map((projects)=>{
                return <ProjectCard key={projects.id} {...projects} theme={theme} />
              })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects