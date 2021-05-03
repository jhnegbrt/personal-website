import './styles/App.scss'
import './styles/Reset.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Technologies from './components/technologies'
import Projects from './components/projects'
import './index.css'
// import MobileNavbar from './components/navbar_mobile'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technologies />
 
    </div>
  );
}

export default App;
