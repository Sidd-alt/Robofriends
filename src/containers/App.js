import React from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css'
import Scroll from "../components/Scroll.js"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChanged=(event)=>{
    console.log(this.setState({searchField: event.target.value}))
  }

  render() {
    const {robots,searchField} = this.state;
    const filterdedRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? <h1 className="tc-m">Loading...</h1> :
     (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChanged}/>
          <Scroll>
            <CardList robots={filterdedRobots}/>
          </Scroll>
        </div>
    
      );
  }
}

export default App;