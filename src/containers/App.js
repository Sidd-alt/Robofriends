import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css'
import Scroll from "../components/Scroll.js"

const App = () =>  {
  const [ robots, setRobots ] = useState([]);
  const [searchField, setSearchField ] = useState('')

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => setRobots(users))
  },[])

  const onSearchChanged=(event)=>{
    setSearchField(event.target.value)
  }

  const filterdedRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  return !robots.length ? <h1 className="tc-m">Loading...</h1> :
  (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox  searchChange={onSearchChanged}/>
      <Scroll>
        <CardList robots={filterdedRobots}/>
      </Scroll>
    </div>

  );
}


export default App;