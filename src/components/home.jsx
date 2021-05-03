import React from 'react'
import '../styles/Home.scss'

class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div name="home" className="about">
        <img id="picture" src="/ketchikan.JPEG" />
        <div className="about-text">
          <h1>Jack Egbert</h1>
          <h2>Software Engineering - Web Design & Development</h2>
          {/* <h2>A few bits about me:</h2>
          <div className="info-text">
            <h3>My definition of fun:</h3>
            <h3>Working with others, or for others, to bring things into
              the world that didn't exist before
            </h3>
            <h3>What makes me tick:</h3>
            <h3>Solving problems that require extending the boundaries
              of my knowledge
            </h3>
            <h3>My favorite projects:</h3>
            <h3>Found novel use cases for familiar technology or 
              required learning and utilizing an unfamiliar technology
            </h3> */}
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default Home