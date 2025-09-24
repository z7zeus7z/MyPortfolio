import classes from '../../Styles/Hero.module.css'
import myimg from '../../assets/LXTE4619.PNG'
import CTA from '../CTA'
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
                    <h3>React Developer & Frontend Engineer</h3>
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