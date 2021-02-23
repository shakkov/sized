import './App.css';
import NavBar from './components/navBar/navBar';
import Slider from './components/slider/slider';
import MostPopular from './components/mostComponent/mostPopular';
import Under from './components/under/under';


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
