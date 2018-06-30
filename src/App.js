import React, { Component } from 'react';
import MainMap from './components/MainMap';
import VegFilter from './components/VegFilter'
import './App.css';

class App extends Component {

  static defaultProps = {

    mapProps: {
      center: {
        lat: -27.5969,
        lng: -48.5495 
      },
      zoom: 15,
      mapKey: "AIzaSyBe3C-cRWorrTRRE7710jmbbrGZN5sU1LE"
    },

    filterProps: [
      {
        options: [
          {
            value: "Arabian",
            selected: false,
            text: "Arabian"
          },
          {
            value: "Italian",
            selected: false,
            text: "Italian"
          },
          {
            value: "Indian",
            selected: false,
            text: "Indian"
          },
          {
            value: "Japanese",
            selected: true,
            text: "Japanese"
          }
        ]
      }
    ]

  };

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">VegViews</h1>
        </header>

        <main id="maincontent">

          <section>
            <MainMap mapProps={this.props.mapProps}/>
          </section>

          <section>
            <VegFilter filterProps={this.props.filterProps} />
          </section>

        </main>
  
      </div>
    );
  }
}

export default App;
