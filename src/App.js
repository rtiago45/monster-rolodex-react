import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component.jsx";
import {SearchBox } from "./components/search-box/search-box.component.jsx"


// Quando usar uma class a gente tem acesso ao state e por isso é melhor
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));   
  }

  render() {
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox  placeholder="Search: " handleChange={ e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
