import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
  
      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
    ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
      });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <input 
          className='search-box'
          type="search"
          placeholder='Search Monsters'
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monsters) => {
          return <h1 key={monsters.id}>{monsters.name}</h1>
        })}
      </div>
      );
  };
}

export default App;
