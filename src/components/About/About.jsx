import classes from '../../Styles/About.module.css'
import CTA from '../CTA'
const About = (props) => {
    const {theme,id} = props
  return (
    <>
        <div id={id} className={`${classes.aboutContainer} ${theme}`}>
            <div className="contentContainer">
                <div className={classes.mainContainer}>
                    <h2>About</h2>
                    <p>Hi, I’m an aspiring frontend developer passionate about creating modern, responsive, and user-friendly web applications. I love solving tricky problems and learning new technologies, always looking for ways to make the web faster, smarter, and more enjoyable.I enjoy working with React, JavaScript (ES6+), TypeScript, and Node.js, and I’m eager to grow my skills by building projects, collaborating with teams, and contributing to exciting challenges.I’m excited to join a startup or established company where I can learn, experiment, and bring ideas to life through clean, efficient code.</p>
                    <CTA link="#contacts" text={"Let's Work To Gather"}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default About