import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">VegViews</h1>
        </header>

        <main id="maincontent">

          <section id="map-container">
            <div id="map" role="application" aria-hidden="true"></div>
          </section>

        </main>
        
      </div>
    );
  }
}

export default App;
