import React, { Component } from 'react';
import VegRestaurantItem from './VegRestaurantItem';

export default class VegRestaurantList extends Component {
    render() {
        const {restaurants} = this.props;        
        return (
            <ul id="restaurants-list">
                {restaurants.map(restaurant => <VegRestaurantItem key={restaurant.id} 
                                                                       restaurantProps={restaurant} 
                                                                       onSelectRestaurant={this.props.onSelectRestaurant}/>)}
            </ul>
        );
    }
}
