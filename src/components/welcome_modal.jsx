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
      <div className={this.props.className ? "welcomeModal off-screen" : "welcomeModal"}>
        <div className="block-1">
          <button onClick={this.props.closeModal}>Enter</button>
        </div>
        <div className="block-2"></div>
        <div className="block-3"></div>
        <div className="block-4"></div>
        {/* <h2>Welcome</h2>
        <h3>johnwegbert.com</h3> */}
      </div>
    )
    return(
      this.state.welcomeModal === true ? welcomeModal : ""
    )
  }
}

export default WelcomeModal