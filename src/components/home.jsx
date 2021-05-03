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
        </div>
      </div>
    )
  }
}

export default Home