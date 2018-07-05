import React, { Component } from 'react';
import MainMap from './components/MainMap';
import VegFilter from './components/VegFilter';
import VegRestaurantList from './components/VegRestaurantList';
import restaurants from './components/mockRestaurants';
import './App.css';

class App extends Component {

  state = { restaurants: [] }

  componentDidMount() {
    this.setState({restaurants})
  }

  static defaultProps = {
    mapProps: {
      center: {
        lat: -27.5969,
        lng: -48.5495,
      },
      zoom: 15,
      mapKey: "AIzaSyBe3C-cRWorrTRRE7710jmbbrGZN5sU1LE",
      componentProps: {
        googleMapURL:"https://maps.googleapis.com/maps/api/js?key=cRWorrTRRE7710jmbbrGZN5sU1LE&v=3.exp&libraries=geometry,drawing,places",
        containerElement: "<div style={{ height: `400px` }}/>",
        mapElement: "<div style={{ height: `400px` }} />"
      }
    },
    filterProps: [
      {
        name: "types",
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
            selected: false,
            text: "Japanese"
          },
          {
            value: "Natural",
            selected: false,
            text: "Natural"
          }
        ]
      }
    ]
  };

  filterByType = ( typeFilter ) => {
    const filtered = restaurants.filter(restaurant => restaurant.type === typeFilter);
    this.setState({"restaurants": filtered});
  } 

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">VegViews</h1>
        </header>

        <main id="maincontent">

          <section>
            <MainMap 
              restaurants={this.state.restaurants} 
              mapProps={this.props.mapProps}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBe3C-cRWorrTRRE7710jmbbrGZN5sU1LE&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              />
          </section>

          <section>
            <VegFilter 
              filterProps={this.props.filterProps} 
              filterByType={this.filterByType} 
            />
            <VegRestaurantList restaurants={this.state.restaurants}/>
          </section>

        </main>
  
      </div>
    );
  }
}

export default App;
