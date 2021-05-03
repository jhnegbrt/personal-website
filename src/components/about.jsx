import React, {useRef, useEffect, useState} from 'react'
import '../styles/About.scss'
import AboutDisplay from './about_display'

function About(){


  // let screenWidth = window.innerWidth

  let firstQuestion = "My definition of fun:"
  let firstAnswer = "Working with others, or for others, to bring things into the world that didn't exist before"
  let secondQuestion = "What makes me tick:"
  let secondAnswer = "Solving problems that require extending the boundaries of my knowledge"
  let thirdQuestion = "My favorite projects:"
  let thirdAnswer = "Found novel use cases for familiar technology or required learning and utilizing an unfamiliar technology"
  let fourthQuestion ="When I'm not at my desk?"
  let fourthAnswer = "In the winter, on Skis; In the summer, on the golf course; Either way, likely with my partner (see above)"

    
  return(

    <div name="about" className="about-container">
      <div className="about-spacer"></div>
      {/* <h2>About</h2> */}
      <AboutDisplay question={firstQuestion} answer={firstAnswer} side={"left"}/>
      <AboutDisplay question={secondQuestion} answer={secondAnswer} side={"right"}/>
      <AboutDisplay question={thirdQuestion} answer={thirdAnswer} side={"left"}/>
      <AboutDisplay question={fourthQuestion} answer={fourthAnswer} side={"right"}/>
    </div>

  )

}

export default About