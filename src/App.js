import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state ={
      monsters: [
        {
          name: 'Linda'
        },
        {
          name: 'Ray'
        },
        {
          name: 'Jack'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
