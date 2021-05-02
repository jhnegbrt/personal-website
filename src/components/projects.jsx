import React, {useRef, useEffect, useState} from 'react'
import '../styles/Projects.scss'

function Projects(){


  let screenWidth = window.innerWidth
  let swoopedImage = <img id="project-image" src="/swooped-page.PNG" />
  let wtrcoolrImage = <img id="project-image" src="/wtrcoolr-page.PNG" />

  let mobileProjects = (
    <div>
      <div className="project-container">
      </div>
      <div className="project-container">
      </div>
      <div className="project-container">
        {swoopedImage}
      </div>
      <div className="project-container">
        {wtrcoolrImage}
      </div>
    </div>
  )

  const sleuthRef = useRef(null)
  const openingMovesRef = useRef(null)
  const swoopedRef = useRef(null)
  const wtrcoolrRef = useRef(null)

  const refs = [sleuthRef, openingMovesRef, swoopedRef, wtrcoolrRef]
  const [isSleuthVisible, setIsVisible ] = useState(false)
  const [isOpeningMovesVisible, setIsVisible ] = useState(false)
  const [isSwoopedVisible, setIsVisible ] = useState(false)
  const [isWtrcoolrVisible, setIsVisible ] = useState(false)

  const callback = (entries) =>{
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: "10%",
    threshold: 1
  }
  debugger

    useEffect(() =>{
      const observer = new IntersectionObserver(callback, options)
      if (sleuthRef.current) observer.observe(sleuthRef.current)
      
      return () => {
        if(sleuthRef.current) observer.unobserve(sleuthRef.current)
      }
    }, [sleuthRef, openingMovesRef, swoopedRef, wtrcoolrRef, options])

  let projects = (
  <div className="projects-container">
    <div className="spacer-div"></div>
    <div ref={sleuthRef} className="project-container">
      <p className={isSleuthVisible ? "view" : ""}>SLEUTH</p>
      <img className={isSleuthVisible ? "view" : "no-view"} id="project-image" src="/sleuth-page.PNG" />
    </div >
    <div className="spacer-div"></div>
    <div ref={openingMovesRef}className="project-container">
      <img className={isSleuthVisible ? "view" : "no-view"} id="project-image" src="/opening-moves-page.PNG" />
      <p className={isSleuthVisible ? "view" : ""}>sample text</p>
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

export default Projects