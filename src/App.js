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
    selectedRestaurante: null,
    modalOpenned: false
  }

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
    const filtered = restaurants.filter(restaurant => {
      if(typeFilter === 'ALL') return true;
      return restaurant.type === typeFilter
    });
    this.setState({"restaurants": filtered});
  } 

  openModal = ( selectedRestaurante ) => {
    this.setState({selectedRestaurante});
    this.setState({"modalOpenned": true});
  }

  closeModal = () => {
    this.setState({"selectedRestaurante":null});
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
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
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
                      <span>Mercado Sehat</span>
                      <span>Indonesian</span>
                      <span>Av. Pequeno Príncipe, 859 - Campeche, Florianópolis - SC, 88063-000</span>
                      <span>08:15–19:00</span>
                      <span>http://www.mercadosehat.com.br/</span>
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
