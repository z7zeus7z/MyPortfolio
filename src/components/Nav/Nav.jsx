import classes from '../../Styles/Nav.module.css';
import Switch from './Switch';
import NavLinks from './navLinks';
import Ham from './Ham';
import HamLinks from './HamLinks';
import { useState } from 'react';
const Nav = (props) => {
   const {theme,setTheme} = props;
   const [isOpen,setIsOpen] = useState(false)
   const toggleOpen = ()=>{
    setIsOpen(prev =>!prev)
   }
  return (
    <>
    <nav className={`${theme} ${classes.mainNav}`}>
        <div className={classes.logo}><h3>&lt;<span>ZEUS</span>/&gt;</h3></div>
        <div className={classes.navLinks}>
            <NavLinks/>
            <Switch theme={theme} setTheme={setTheme}  className={classes.switch}/>
            <Ham  toggleOpen={toggleOpen}/>
            <HamLinks isOpen={isOpen} toggleOpen={toggleOpen} theme={theme}/>
        </div>
        
    </nav>
    </>
  )
}

export default Nav