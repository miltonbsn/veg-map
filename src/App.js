import React, { Component } from 'react';
import VegMap from './components/VegMap';
import VegFilter from './components/VegFilter';
import VegRestaurantList from './components/VegRestaurantList';
import restaurants from './components/mockRestaurants';
import filterConfig from './config/FilterConfig';
import mapConfig from './config/MapConfig';
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
    mapProps: mapConfig,
    filterProps: filterConfig
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
              googleMapURL={this.props.mapProps.url}
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
