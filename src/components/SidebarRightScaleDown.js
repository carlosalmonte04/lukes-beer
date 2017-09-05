import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import Beers from './Beers'
import Luke from './Luke'
import ShowBeer from './ShowBeer'
import UserProfile from './UserProfile'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery'; 

class SidebarRightScaleDown extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='Liked'>
              <Icon name='heart' />
              Liked: {this.props.userBeers.liked.length}
            </Menu.Item>
            <Menu.Item name='Mehed'>
              <Icon name='thumbs outline down' />
              Mehed: {this.props.userBeers.mehed.length}
            </Menu.Item>
            <Menu.Item name='Comments'>
              <Icon name='comment' />
              Commented: {this.props.userBeers.commented.length}
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Route path="/" render={ () => <NavBar toggleVisibility={this.toggleVisibility}/> } />
              <Route path="/" render={ () => <SearchBar getBeer={this.props.getBeer}/> } />
              <Route path="/" render={ () => <Beers beers={this.props.beers} displayBeer={this.props.displayBeer} /> } />
              <Route exact path="/beers/:id" component={(props) => <ShowBeer {...props} beers={this.props.beers} addComment={this.props.addComment} mehBeer={this.props.mehBeer} likeBeer={this.props.likeBeer} />}/>
              <Route exact path="/users/:id" component={(props) => <UserProfile {...props} userBeers={this.props.userBeers} />}/>
              <Route path="/luke" component={Luke} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRightScaleDown