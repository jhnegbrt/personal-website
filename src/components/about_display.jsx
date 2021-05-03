import React, {useRef, useEffect, useState} from 'react'

const AboutDisplay = (props) => {

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
    rootMargin: "1%",
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
    <div className={isVisible ? "about-container-right show" : "about-container-right"}>
      <p className={isVisible ? "question" : "off-right"}>{props.question}</p>
      <p className={isVisible ? "answer" : "off-right"}>{props.answer}</p>
      <div className="about-spacer-v2"></div>
      <div ref={ref}></div>
    </div>

  )

  let left = (
    <div className={isVisible ? "about-container-left show" : "about-container-left"}>
      <p className={isVisible ? "question" : "off-left"}>{props.question}</p>
      <p className={isVisible ? "answer" : "off-left"}>{props.answer}</p>
      <div className="about-spacer-v2"></div>
      <div ref={ref}></div>
    </div>
  
  )

  return(
    
    props.side === "right" ? right : left

  )

}

export default AboutDisplay