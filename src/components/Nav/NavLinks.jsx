import classes from '../../Styles/Nav.module.css'
const NavLinks = () => {
  return (
    <>
    <div  className={classes.navigate} >
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>
    </div>
    </>
)
}

export default NavLinks