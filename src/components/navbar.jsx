
import * as Scroll from 'react-scroll'
import { render } from 'react-dom'
import '../styles/Navbar.scss'
import React from 'react'


class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mobileMenu: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
    this.setState({
      mobileMenu: !this.state.mobileMenu
    })
  }

  render(){

    let Link = Scroll.Link
    let scroll = Scroll.animateScroll
    let scrollSpy = Scroll.scrollSpy
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight
    let projectOffset = screenHeight / 15
    let menu = (
      <ul>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-200} duration={500}>
          Home
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
          About
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
          Projects
        </Link>
        <Link activeClass="active" to="Resume" spy={true} smooth={true} offset={50} duration={500}>
          Resume
        </Link>
        <Link activeClass="active" to="tools" spy={true} smooth={true} offset={50} duration={500}>
          Tools
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
      </ul>
    )
    let navbar = (
      <header className="desktop-header">
        <div className="inner-header">
          <h3>JE</h3>
          {menu}
        </div>
      </header>
    )
    
    let visibility;
    this.state.mobileMenu ? visibility = "show" : visibility = "hide";
    let mobileNavbar = (
      <div>
        <header className="mobile-header">
          <h3>JE</h3> 
          <button onClick={this.toggleMenu}>Menu</button>
        </header>
        <div id="mobile-menu" className={visibility}>
          {menu}
          <button onClick={this.toggleMenu}>-Close Menu-</button>
        </div>
      </div>
    )

    return(
      screenWidth > 768 ? navbar : mobileNavbar

    )
  }
}

export default Navbar

