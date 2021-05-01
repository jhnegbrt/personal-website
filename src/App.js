import './styles/App.scss'
import './styles/Reset.css'
import Navbar from './components/navbar'
// import MobileNavbar from './components/navbar_mobile'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>My App</div>
    </div>
  );
}

export default App;
