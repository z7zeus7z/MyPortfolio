import { useState } from "react"
import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Work/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
function App() {
 const [theme,setTheme] = useState('lightPrimary');
 const toggleTheme = ()=>{
  setTheme((theme)=> theme==='lightPrimary'?'darkPrimary':'lightPrimary')
 }
  
  return (
    <>
    <Nav theme={theme} setTheme={toggleTheme}  />
    <Hero id="home"/>
    <About id="about" theme={theme}/>
    <Projects id="projects" theme={theme}/>
    <Contacts id="contacts" theme={theme}/>
    <Footer theme={theme}/>
    </>
  )
}

export default App
