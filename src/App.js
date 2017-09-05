import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import Beers from './components/Beers'
import Luke from './components/Luke'
import ShowBeer from './components/ShowBeer'
import SidebarRightScaleDown from './components/SidebarRightScaleDown'
import UserProfile from './components/UserProfile'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {TweenMax, Power2, TimelineLite} from "gsap";
import $ from 'jquery'; 
import 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      beers: '',
      beer: {
        comments: []
      },
      userBeers: {
        liked: [],
        mehed: [],
        commented: []
      }
    }
  }

  getBeer = (beerName) => {

    fetch(`http://api.brewerydb.com/v2/search?q=${beerName}&key=eec0feeeee89d3390e84b6b058eeb065&type=beer`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        beers: res.data,
        beer: {}
      })
    })
    .then(res => this.hideBeers())
    .then(res => this.displayBeers())
  }

  componentWillMount() {
    this.state = {
      beers: [],
      beer: {
        comments: []
      },
      userBeers: {
        liked: [],
        mehed: [],
        commented: []
      }
    }
  }

  displayBeers =() => {
    $('html, body').animate({
      scrollTop: $('.ui.cards').offset().top - 25
    }, 300)
    .queue( function() {
      setTimeout(() => {
        TweenMax.staggerFromTo(document.getElementsByClassName('card'), 0.3, {opacity: 0}, {opacity: 1}, 0.1)
        $(this).dequeue()
        return true
      }, 900)
    })
  }

  hideBeers = () => {
      // TweenMax.staggerFromTo(document.getElementsByClassName('card'), 0.2, {opacity: 1}, {opacity: 0}, 0.1)
      return true
  }

  displayBeer = (beer) => {
    if (!(!!beer.comments)) {
      beer.comments = []
    }
    if (!(!!beer.likes)) {
      beer.likes = 0
    }
    if (!(!!beer.meh)) {
      beer.meh = 0
    }
    $('html, body').animate({
      scrollTop: $('html, body').offset().top - 25
    }, 400);

    console.log(beer)
    this.setState({
      beer: beer
    })
  }


  addComment = (beer, comment) => {
    beer.comments = [...beer.comments, comment]
    const foundBeer = this.state.userBeers.commented.find(beerInState => beerInState.id === beer.id)

    if (!!foundBeer) {
      this.setState({
        beer: beer,
        userBeers: {
          liked: this.state.userBeers.liked,
          commented: this.state.userBeers.commented,
          mehed: this.state.userBeers.mehed
        }
      })
    }
    else {
      this.setState({
        beer: beer,
        userBeers: {
          liked: this.state.userBeers.liked,
          commented: [...this.state.userBeers.commented, beer],
          mehed: this.state.userBeers.mehed
        }
      })
    }
  }

  mehBeer = (beer) => {
    beer.meh === 0 ? beer.meh = this.state.beer.meh + 1 : beer.meh = this.state.beer.meh - 1

    if (beer.meh === 0) {

      this.setState({
        beer: beer,
        userBeers: {
          liked: this.state.userBeers.liked,
          commented: this.state.userBeers.commented,
          mehed: this.state.userBeers.liked.filter(beerInState => beerInState.id != beer.id)
        }
      })
    }
    else {
      this.setState({
        beer: beer,
        userBeers: {
          liked: this.state.userBeers.liked,
          commented: this.state.userBeers.commented,
          mehed: [...this.state.userBeers.mehed, beer]
        }
      })
    }
  }

  likeBeer = (beer) => {
    beer.likes === 0 ? beer.likes = this.state.beer.likes + 1 : beer.likes = this.state.beer.likes - 1

    if (beer.likes === 0) {
      this.setState({
        beer: beer,
        userBeers: {
          liked: this.state.userBeers.liked.filter(beerInState => beerInState.id != beer.id),
          commented: this.state.userBeers.commented,
          mehed: this.state.userBeers.mehed
        }
      })
    }
    else {
      this.setState({
        beer: beer,
        userBeers: {
          liked: [...this.state.userBeers.liked, beer],
          commented: this.state.userBeers.commented,
          mehed: this.state.userBeers.mehed
        }
      })
    }
  }
  componentDidMount() {
    console.log("mounted")
    setTimeout(() => {
      $('.App').show()
      
    }, 1000)
  }


  render() {
    return (
      <div className="App animated fadeIn" style={{display: "none"}}>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>

        <Route path="/" render={ () => <SidebarRightScaleDown beers={this.state.beers} 
          addComment={this.addComment} 
          getBeer={this.getBeer}
          displayBeer={this.displayBeer}
          mehBeer={this.mehBeer}
          likeBeer={this.likeBeer}
          userBeers={this.state.userBeers}
           /> } />
      </div>
    );
  }
}

export default App;
