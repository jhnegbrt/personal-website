import React, {useRef, useEffect, useState} from 'react'
import '../styles/About.scss'
import AboutDisplay from './about_display'

function About(){


  // let screenWidth = window.innerWidth

  let firstQuestion = "My definition of fun:"
  let firstAnswer = "Working with others, or for others, to bring things into the world that didn't exist before"
//   What makes me tick:
//     Solving problems that require extending the boundaries
//     of my knowledge
//   My favorite projects:
// Found novel use cases for familiar technology or 
//     required learning and utilizing an unfamiliar technology

    
  return(

    <div className="about-container">
      <div className="about-spacer"></div>
      <AboutDisplay question={firstQuestion} answer={firstAnswer} side={"left"}/>
      <div className="about-spacer"></div>
      <AboutDisplay question={firstQuestion} answer={firstAnswer} side={"right"}/>
      <div className="about-spacer"></div>
      <AboutDisplay question={firstQuestion} answer={firstAnswer} side={"left"}/>
      <div className="about-spacer"></div>
      <AboutDisplay question={firstQuestion} answer={firstAnswer} side={"right"}/>
      <div className="about-spacer"></div>
    </div>

  )

}

export default About