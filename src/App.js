import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from "./components/navBar/navBar"
import HomePage from './components/HomePage/HomePage'
import Product from './components/ProductPage/Product'
import Under from "./components/under/under"


function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/product" component={Product} />
            </Switch>
            <Under/>

        </div>
    )
}

export default App
