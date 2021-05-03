import React from 'react'
import '../styles/Technologies.scss'
// import { ReactComponent as NodeLogo } from '../../public/logos/node-js.svg'

class Technologies extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div name="technologies" className="technologies">
        <div className="technology-logos">
          <div>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} />
            <img src={"https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"} />
            <img src={"https://upload.wikimedia.org/wikipedia/commons/archive/6/61/20170517184423%21HTML5_logo_and_wordmark.svg"} />
            <img id="css" src={"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"} />
          </div>
          <div>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"} />
            <img src={"https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"} />
            <img src={"https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg"} />
            <img src={"https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"} />
          </div>
          <div>
            <img id="node" src={"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"} />
            <img id="express" src={"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"} />
            <img id="mongo" src={"https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"} />
          </div>
          <div>
            <img id="git" src={"https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"} />
            <img id="webpack" src={"https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg"} />
            <img id="jQuery" src={"https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg"} />
          </div>
        </div>
        <div>
          <h3>Whether I am leading the integration of a new technology, or responsible for understanding the effects a legacy 
            system has on a tech stack, the exploration of limits of any technology excites me
          </h3>
        </div>
      </div>


    )
  }
}

export default Technologies