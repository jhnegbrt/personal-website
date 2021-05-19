import React from 'react'

class MobileWelcomeModal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={this.props.className ? "welcomeModal off-screen" : "welcomeModal"}>
        <div className="mobile-block-1">
          <div className="mobile-modal-left">
            <h2>Welcome</h2>
            <h2>johnwegbert.com</h2>
          </div>
        </div>
        <div className="mobile-block-2">
        <div className="mobile-modal-right">
            <button onClick={this.props.closeModal}>Enter</button>
          </div>
        </div>
        <div className="mobile-block-3">
          <div className="mobile-modal-bottom">
            <a>Github</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileWelcomeModal


