import React, {useRef, useEffect, useState} from 'react'
import '../styles/Projects.scss'

import Project from './project_display'

function Projects(){


  // let screenWidth = window.innerWidth

  let sleuth = "This was my Sleuth Project"
  let openingMoves = "This was my openingMoves Project"
  let wtrcoolrText = "This was my wtrcoolr Project"
  let swoopedText = "this was my swooped Project"
    
  return(

    <div name="projects" className="projects-container">
      <div className="spacer-div"></div>
      <div className="row">
        <Project imgSrc={"/sleuth-page.PNG"} imageSide={"left"} textBody={sleuth}/>
        <Project imgSrc={"/opening-moves-page.PNG"} imageSide={"right"} textBody={openingMoves}/>
      </div>
      <div className="row">
        <Project imgSrc={"/swooped-page.PNG" } imageSide={"left"} textBody={swoopedText}/>
        <Project imgSrc={"/wtrcoolr-page.PNG"} imageSide={"right"} textBody={wtrcoolrText}/>
      </div>
      <div className="spacer-div"></div>
      <div className="spacer-div"></div>
      {/* <Project imgSrc={"/sleuth-page.PNG"} imageSide={"left"} textBody={sleuth}/> */}
    </div>

  )

}

export default Projects