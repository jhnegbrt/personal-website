import React from 'react'
import '../styles/WelcomeModal.scss'

class WelcomeModal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={this.props.className ? "welcomeModal off-screen" : "welcomeModal"}>
        <div className="block-1">
        </div>
        <div className="block-2">
          <div className="modal-intro-left">
            <h2>Welcome</h2>
            <h3>johnwegbert.com</h3>
          </div>
        </div>
        <div className="block-3">
          <div className="modal-intro-right">
            <button onClick={this.props.closeModal}>Enter</button>
          </div>
        </div>
        <div className="block-4">
          <a>Github</a>
          <a>LinkedIn</a>
        </div>
      </div>
    )
  }
}

export default WelcomeModal


// who am i, what excites me about engineering, what have i buuilltt, what i am working on

// what was I before and what accomplishments/industries2, hobbies, volunteering
