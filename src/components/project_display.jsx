import React, {useRef, useEffect, useState} from 'react'

const Project = (props) => {

  const ref = useRef(null)

  const [isVisible, setIsVisible ] = useState(false)

  const callback = (entries) =>{
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: "10%",
    threshold: 1
  }
  

  useEffect(() =>{
    const observer = new IntersectionObserver(callback, options)
    if (ref.current) observer.observe(ref.current)
    
    return () => {
      if(ref.current) observer.unobserve(ref.current)
    }
  }, [ref, options])

  let right = (
  <div ref={ref} className="project-container">
    <p className={isVisible ? "view" : ""}>{props.textBody}</p>
    <img className={isVisible ? "view" : "no-view"} id="project-image" src={props.imgSrc}></img>
  </div>

  )

  let left = (
    <div ref={ref} className="project-container">
      <img className={isVisible ? "view" : "no-view"} id="project-image" src={props.imgSrc}></img>
      <p className={isVisible ? "view" : ""}>{props.textBody}</p>
    </div>
  
  )

  return(
    
    props.imageSide === "right" ? right : left

  )

}

export default Project