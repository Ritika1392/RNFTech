import React, { Component } from 'react';
import './../css/App.css';
import PollComponent from './../components/PollComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PollComponent/>
      </div>
    );
  }
}

export default App;
