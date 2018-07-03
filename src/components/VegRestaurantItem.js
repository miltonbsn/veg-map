import React, { Component } from 'react';

export default class VegRestaurantItem extends Component {
    render() {
        const { restaurantProps } = this.props;
        return (
            <li>
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
