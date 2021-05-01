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
    let screenWidth = window.innerWidth
    let menu = (
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    )
    let navbar = (
      <header className="desktop-header">
        <h3>Jack Egbert</h3>
        {menu}
      </header>
    )
    
    let visibility;
    this.state.mobileMenu ? visibility = "show" : visibility = "hide";
    let mobileNavbar = (
      <div>
        <header className="mobile-header">
          <h3>Jack Egbert</h3> 
          <button onClick={this.toggleMenu}>Menu</button>
        </header>
        <div id="mobile-menu" className={visibility}>
          {menu}
        </div>
      </div>
    )

    return(
      screenWidth > 768 ? navbar : mobileNavbar

    )
  }
}

export default Navbar

