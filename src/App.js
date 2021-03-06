import './styles/App.scss'
import './styles/Reset.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Technologies from './components/technologies'
import Projects from './components/projects'
import WelcomeModal from './components/welcome_modal'
import MobileWelcomeModal from './components/mobile/mobile_welcome_modal'
import './index.css'
// import MobileNavbar from './components/navbar_mobile'

import React, { useContext, useState } from 'react'
const Modal = React.createContext()

function App() {
  const [modal, setModal] = useState(true)
  const toggleModal = () =>{
    setModal(false)
  }

  let width = window.innerWidth
  
  let site = (
    <div className="app">
      {width > 768 ? <WelcomeModal className="off-screen"/> : <MobileWelcomeModal className="off-scrren" />}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technologies />
    </div>
  )
  let welcomeModal = (
    
    <div className="app">
      {width > 768 ? <WelcomeModal closeModal={toggleModal}/> : <MobileWelcomeModal closeModal={toggleModal}/>}
    </div>

  )
  return (
    
    <div>
      {modal ? welcomeModal : site }
    </div>

  );
}

export default App;
