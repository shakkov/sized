import './components/navBar.css';
import './App.css';
import NavBar from './components/navBar';
import Slider from './components/slider';
import MostPopular from './components/mostPopular';

function App() {
    return <div className="App">
      <NavBar/>
      <hr></hr>
      <Slider/>
      <MostPopular/>
    </div>
}

export default App
