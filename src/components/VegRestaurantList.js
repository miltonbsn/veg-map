import React, { Component } from 'react';
import restaurants from './mockRestaurants';
import VegRestaurantItem from './VegRestaurantItem';

export default class VegRestaurantList extends Component {
    render() {
        return (
            <ul id="restaurants-list">
                {restaurants.map(restaurant => <VegRestaurantItem key={restaurant.id} restaurantProps={restaurant}/>)}
            </ul>
        );
    }
}
