import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'

class App extends Component {

  getBeer = (beerName) => {
    // /search?q=Goosinator&type=beer
    fetch(`http://api.brewerydb.com/v2/search?q=${beerName}&key=eec0feeeee89d3390e84b6b058eeb065&type=beer`)
    .then(res => res.json())
    .then(beer => console.log(beer))
    //
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <SearchBar getBeer={this.getBeer}/>
        </div>
      </div>
    );
  }
}

export default App;
