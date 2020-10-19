import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Manufacturers from './components/Manufacturers.js'
import AllProducts from './components/AllProducts.js'
import Contact from './components/Contact.js'
import About from './components/About.js'




class App extends React.Component {

  render (){
      return (
      <BrowserRouter>
        <div className="container-fluid">
        <Nav />
        <div className="app pb-4">
        <Switch>
          <Route exact path="/" render = {() => <About />} />
          <Route exact path="/AllProducts" render = {() => <AllProducts/>} />
          <Route exact path="/Manufacturers" render = {() => <Manufacturers/>} />
          <Route exact path="/Contact" render = {() => <Contact/>} />
        </Switch>
        </div>
        </div>
        </BrowserRouter>
      )
    }
}

export default App;
