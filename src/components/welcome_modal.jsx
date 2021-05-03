import React from 'react'
import '../styles/WelcomeModal.scss'

class WelcomeModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      welcomeModal: true
    }
  }

  render(){
    debugger
    let welcomeModal = (
      <div className="welcomeModal">
        <h2>Welcome</h2>
        <h3>johnwegbert.com</h3>
        <button onClick={this.props.closeModal}>Enter</button>
      </div>
    )
    return(
      this.state.welcomeModal === true ? welcomeModal : ""
    )
  }
}

export default WelcomeModal