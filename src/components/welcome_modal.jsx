import React from 'react'
import '../styles/WelcomeModal.scss'

class WelcomeModal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let welcomeModal = (
      <div className={this.props.className ? "welcomeModal off-screen" : "welcomeModal"}>
        <div className="block-1">
        </div>
        <div className="block-2"></div>
        <div className="block-3"></div>
        <div className="block-4">
          <div className="modal-intro">
            <h2>Welcome</h2>
            <h3>johnwegbert.com</h3>
            <button onClick={this.props.closeModal}>Enter</button>
          </div>
        </div>
      </div>
    )
    return(
      welcomeModal
    )
  }
}

export default WelcomeModal


// who am i, what excites me about engineering, what have i buuilltt, what i am working on

// what was I before and what accomplishments/industries2, hobbies, volunteering
