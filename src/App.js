import './styles/App.scss'
import './styles/Reset.css'
import Navbar from './components/navbar'
import About from './components/about'
import Technologies from './components/technologies'
// import MobileNavbar from './components/navbar_mobile'

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Technologies />
      <div>My App</div>
    </div>
  );
}

export default App;
