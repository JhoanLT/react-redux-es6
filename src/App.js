import React, { Component } from 'react';
import './App.css';
import WeatherLocation from "./components/weatherLocation/WeatherLocation";

class App extends Component {
  render() {
    return (
      <div className="App">
          <WeatherLocation/>
      </div>
    );
  } 
}

export default App;
