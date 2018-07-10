import React, { Component } from 'react';

export default class VegRestaurantItem extends Component {

    handleKeyPress = (event, restaurantProps, onSelectRestaurant) => {
        if(event.key === 'Enter') onSelectRestaurant(restaurantProps);
    }

    render() {
        const { restaurantProps, onSelectRestaurant } = this.props;
        return (
            <li onClick={(e) => onSelectRestaurant(restaurantProps)} onKeyDown={(e) => this.handleKeyPress(e, restaurantProps, onSelectRestaurant)} tabIndex="0">
                <div className="card-content">
                    <div className="img-container">
                        <img className="restaurant-img"
                            alt={`Restaurant ${restaurantProps.name} - cuisine ${restaurantProps.type}`}
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
