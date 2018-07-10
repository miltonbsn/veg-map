import React, { Component } from 'react';
import VegMap from './components/VegMap';
import VegFilter from './components/VegFilter';
import VegRestaurantList from './components/VegRestaurantList';
import filterConfig from './config/FilterConfig';
import mapConfig from './config/MapConfig';
import Modal from 'react-responsive-modal';
import * as VegApi from './apis/VegApi'
import './App.css';

class App extends Component {

  state = { 
    restaurants: [],
    selectedRestaurant: {},
    modalOpenned: false
  }

  static defaultProps = {
    mapProps: mapConfig,
    filterProps: filterConfig,
    allRestaurants :[]
  };

  componentDidMount() {
    VegApi.getAll().then((restaurants) => {
      this.setState({restaurants});
      this.props.allRestaurants.push(...restaurants);
    });
  }

  filterByType = ( typeFilter ) => {
    const filtered = this.props.allRestaurants.filter(restaurant => {
      if(typeFilter === 'ALL') return true;
      return restaurant.type === typeFilter
    });
    this.setState({"restaurants": filtered});
  } 

  openModal = ( selectedRestaurant ) => {
    this.setState({selectedRestaurant});
    this.setState({"modalOpenned": true});
  }

  closeModal = () => {
    this.setState({"selectedRestaurant":{}});
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
              selectedRestaurant={this.state.selectedRestaurant}
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
                      <span>{this.state.selectedRestaurant.name}</span>
                      <span>{this.state.selectedRestaurant.type}</span>
                      <span>{this.state.selectedRestaurant.address}</span>
                      <span>{this.state.selectedRestaurant.hours}</span>
                      <span>{this.state.selectedRestaurant.website}</span>
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
