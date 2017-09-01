import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar'
import Beers from './components/Beers'
import Luke from './components/Luke'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  getBeer = (beerName) => {
    // /search?q=Goosinator&type=beer
    fetch(`http://api.brewerydb.com/v2/search?q=${beerName}&key=eec0feeeee89d3390e84b6b058eeb065&type=beer`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        beers: res.data
      })
    }
      )
    //
  }

  componentWillMount() {
    this.state = {
      beers: []
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ () => <SearchBar getBeer={this.getBeer}/> } />
        <Route exact path="/" render={ () => <Beers beers={this.state.beers} /> } />
        <Route path="/luke" component={Luke} />
      </div>
    );
  }
}

export default App;
