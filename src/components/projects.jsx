import React from 'react'
import '../styles/Projects.scss'

class Projects extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let screenWidth = window.innerWidth
    let sleuthImage = <img id="project-image" src="/sleuth-page.PNG" />
    let openingMovesImage = <img id="project-image" src="/opening-moves-page.PNG" />
    let swoopedImage = <img id="project-image" src="/swooped-page.PNG" />
    let wtrcoolrImage = <img id="project-image" src="/wtrcoolr-page.PNG" />

    let mobileProjects = (
      <div>
        <div className="project-container">
          
          {sleuthImage}
        </div>
        <div className="project-container">
          {openingMovesImage}
        </div>
        <div className="project-container">
          {swoopedImage}
        </div>
        <div className="project-container">
          {wtrcoolrImage}
        </div>
      </div>
    )

    let projects = (
    <div className="projects-container">
      <div className="spacer-div"></div>
      <div className="project-container">
        <p>sample text</p>
        {sleuthImage}
      </div >
      <div className="spacer-div"></div>
      <div className="project-container">
        {openingMovesImage}
        <p>sample text</p>
      </div>
      <div className="spacer-div"></div>
      <div className="project-container">
        <p>sample text</p>
        {swoopedImage}
      </div>
      <div className="spacer-div"></div>
      <div className="project-container">
        {wtrcoolrImage}
        <p>sample text</p>
      </div>
    </div>
    )
    
    return(

      screenWidth > 768 ? projects : mobileProjects

    )
  }
}

export default Projects