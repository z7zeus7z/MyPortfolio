import classes from '../../Styles/Hero.module.css'
import myimg from '../../assets/myimg.png'
import CTA from '../CTA'
import Typewriter from 'typewriter-effect'
const Hero = (props) => {
  const {id} = props
  return (
    <>
    <div id={id} className={classes.HeroContainer}>
        <div className='contentContainer'>
            <div className={classes.mainContainer}>
                <div className={classes.imageContainer}>
                  <div className={classes.hexagon}>
                    <img src={myimg} alt="" />
                  </div>
                </div>
                <div className={classes.infoContainer}>
                   <Typewriter
                      options={{
                        delay:50,
                        cursor: "" 
                      }}
                      onInit={(typewriter) => {
                        typewriter.typeString("<h3>React Developer , Frontend Engineer</h3>")
                        .start();
                      }}/>
                    <p>Building modern web applications with React, JavaScript, and cutting-edge technologies. Passionate about creating exceptional user experiences.</p>
                     <div className={classes.btns}>
                    <CTA link="#projects" text="View my work"/>
                    <CTA link="#contacts" text="Get in touch"/>
                </div>
                </div>
               
            </div>
        </div>
    </div>
    </>
)
}

export default Hero