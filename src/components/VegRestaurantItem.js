import React, { Component } from 'react';

export default class VegRestaurantItem extends Component {
    render() {
        const { restaurantProps, onSelectRestaurant } = this.props;
        return (
            <li onClick={(e) => onSelectRestaurant(restaurantProps)}>
                <div className="card-content">
                    <div className="img-container">
                        <img className="restaurant-img"
                            alt="Restaurant {restaurant.name} - cuisine ${restaurant.cuisine_type}"
                            src={restaurantProps.img}
                        />
                    </div>
                    <div className="detail-container"> 
                        <h2>{restaurantProps.name}</h2>
                        <h3>{restaurantProps.type}</h3>
                        <span>{restaurantProps.hours}</span>
                    </div>
                </div>
            </li>
        );
    }
}
