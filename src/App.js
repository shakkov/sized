import './components/navBar.css';
import './App.css';
import NavBar from './components/navBar';
import Slider from './components/slider';
import MostPopular from './components/mostPopular';
import Under from './components/under';


function App() {
    return <div className="App">
      <NavBar/>
      <hr></hr>
      <Slider/>
      <MostPopular/>
      <hr></hr>
      <Under/>
    </div>
}

export default App
