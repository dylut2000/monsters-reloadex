import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SeachBox } from './components/search-box/search-box.component';
import axios from 'axios';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => this.setState({ monsters: users }));

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const monsters = res.data;
        this.setState({ monsters });
      })
    
    
  }

  handleChange = e => this.setState({ searchField: e.target.value })

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SeachBox
          placeholder='Search monster'
          handleChange={this.handleChange} />
        <CardList name="hardy" monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;



