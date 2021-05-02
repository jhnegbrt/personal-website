import './styles/App.scss'
import './styles/Reset.css'
import Navbar from './components/navbar'
import About from './components/about'
import Technologies from './components/technologies'
import Projects from './components/projects'
import './index.css'
// import MobileNavbar from './components/navbar_mobile'

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Projects />
      <Technologies />
 
    </div>
  );
}

export default App;
