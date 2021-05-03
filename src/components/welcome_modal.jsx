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
          <button onClick={this.props.closeModal}>Enter</button>
        </div>
        <div className="block-2"></div>
        <div className="block-3"></div>
        <div className="block-4"></div>
      </div>
    )
    return(
      welcomeModal
    )
  }
}

export default WelcomeModal

        // {/* <div className="modal-intro"> */}
        //     {/* <h2>Welcome</h2> */}
        //     {/* <h3>johnwegbert.com</h3> */}
        //     <button onClick={this.props.closeModal}>Enter</button>
        // {/* </div> */}
