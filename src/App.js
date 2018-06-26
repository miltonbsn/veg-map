import React, { Component } from 'react';
import MainMap from './components/MainMap';
import './App.css';

class App extends Component {

  static defaultProps = {
    center: {
      lat: -27.5969,
      lng: -48.5495 
    },
    zoom: 15,
    mapKey: "AIzaSyBe3C-cRWorrTRRE7710jmbbrGZN5sU1LE"
  };

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">VegViews</h1>
        </header>

        <main id="maincontent">
          <MainMap mapProps={this.props}/>
        </main>
        
      </div>
    );
  }
}

export default App;
