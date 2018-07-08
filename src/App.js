import React, { Component } from 'react';
import VegMap from './components/VegMap';
import VegFilter from './components/VegFilter';
import VegRestaurantList from './components/VegRestaurantList';
import restaurants from './components/mockRestaurants';
import Modal from 'react-responsive-modal';
import './App.css';

class App extends Component {

  state = { 
    restaurants: [],
    selectedRestaurante: {},
    modalOpenned: false
  }

  componentDidMount() {
    this.setState({restaurants})
  }

  static defaultProps = {
    mapProps: {
      center: {
        lat: -27.6221602,
        lng: -48.4918816,
      },
      zoom: 12,
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
            value: "ALL",
            selected: true,
            text: "All types"
          },
          {
            value: "Arabian",
            selected: false,
            text: "Arabian"
          },
          {
            value: "Indian",
            selected: false,
            text: "Indian"
          },
          {
            value: "Japonese",
            selected: false,
            text: "Japonese"
          },
          {
            value: "Natural",
            selected: false,
            text: "Natural"
          },
          {
            value: "Mexican",
            selected: false,
            text: "Mexican"
          }
        ]
      }
    ]
  };

  filterByType = ( typeFilter ) => {
    const filtered = restaurants.filter(restaurant => {
      if(typeFilter === 'ALL') return true;
      return restaurant.type === typeFilter
    });
    this.setState({"restaurants": filtered});
  } 

  openModal = ( selectedRestaurante ) => {
    console.log(selectedRestaurante);
    this.setState({selectedRestaurante});
    this.setState({"modalOpenned": true});
  }

  closeModal = () => {
    this.setState({"selectedRestaurante":{}});
    this.setState({"modalOpenned": false});
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">VegViews</h1>
        </header>

        <main id="maincontent">

          <section>
            <VegMap 
              restaurants={this.state.restaurants} 
              mapProps={this.props.mapProps}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBe3C-cRWorrTRRE7710jmbbrGZN5sU1LE&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `500px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              onSelectRestaurant={this.openModal}
            />
          </section>

          <section>
            <VegFilter 
              filterProps={this.props.filterProps} 
              filterByType={this.filterByType} 
            />
            <VegRestaurantList 
              restaurants={this.state.restaurants}
              onSelectRestaurant={this.openModal}
            />
          </section>

          <section>
            <Modal open={this.state.modalOpenned} onClose={this.closeModal} center classNames={{modal:'veg-modal'}}>
              <h2 className="title">Veg detail</h2>
              <div className="modal-content">
                  <div className="detail-container"> 
                      <span>{this.state.selectedRestaurante.name}</span>
                      <span>{this.state.selectedRestaurante.type}</span>
                      <span>{this.state.selectedRestaurante.address}</span>
                      <span>{this.state.selectedRestaurante.hours}</span>
                      <span>{this.state.selectedRestaurante.website}</span>
                  </div>
              </div>
            </Modal>
          </section>

        </main>
  
      </div>
    );
  }

}

export default App;
