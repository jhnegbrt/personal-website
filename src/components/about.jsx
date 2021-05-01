import React from 'react'
import '../styles/About.scss'

class About extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="about">
        <img id="picture" src="/ketchikan.JPEG" />
        <div className="about-text">
          <h1>Jack Egbert</h1>
          <div className="info-text">
            <h2>Software Engineering</h2>
            <h2>Web Design & Development</h2>
            <h3>My definition of fun:</h3>
            <h3>Working with others, or for others, to bring things into
              the world that didn't exist before
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default About