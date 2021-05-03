import React, {useRef, useEffect, useState} from 'react'

const Project = (props) => {

  const ref = useRef(null)

  const [isVisible, setIsVisible ] = useState(false)

  const callback = (entries) =>{
    const [entry] = entries
    if (entry.isIntersecting === true){
      setIsVisible(entry.isIntersecting)
    }
    
  }

  const options = {
    root: null,
    rootMargin: "0%",
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
  <div ref={ref} className={isVisible ? "project-container show" : "project-container"}>
    <p className={isVisible ? "view" : "off-right"}>{props.textBody}</p>
    <img className={isVisible ? "view" : "off-left"} id="project-image" src={props.imgSrc}></img>
  </div>

  )

  let left = (
    <div ref={ref} className={isVisible ? "project-container show" : "project-container"}>
      <img className={isVisible ? "view" : "off-right"} id="project-image" src={props.imgSrc}></img>
      <p className={isVisible ? "view" : "off-left"}>{props.textBody}</p>
    </div>
  
  )

  return(
    
    props.imageSide === "right" ? right : left

  )

}

export default Project