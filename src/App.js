import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state ={
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() =>{
        return {monsters: users}
      },));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return { searchField };
  })
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    });
    
    return (
      <div className="App">
        <h1 className='app-title'>Monsters App</h1>
        <SearchBox onChangeHandler={this.onSearchChange} placeholder={'Search monsters'} className={'monsters-search-box'} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
