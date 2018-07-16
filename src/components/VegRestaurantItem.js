import React, { Component } from 'react';
import default_img from '../imgs/default_64.png';

export default class VegRestaurantItem extends Component {

    /**
     * @param {object} event
     * @param {object} restaurantProps
     * @param {function} onSelectRestaurant
     * Call function that open the detail modal on user key press.
    */
    handleKeyPress = (event, restaurantProps, onSelectRestaurant) => {
        if(event.key === 'Enter') onSelectRestaurant(restaurantProps);
    }

    buildIconUrl = (category) => {
        return `${category.icon.prefix}64${category.icon.suffix}`;
    }

    handleBrokenImg = (event) => {
        event.target.src = default_img;
    }

    render() {
        const { restaurantProps, onSelectRestaurant } = this.props;
        const category = restaurantProps.categories[0];
        return (
            <li onClick={(e) => onSelectRestaurant(restaurantProps)} onKeyDown={(e) => this.handleKeyPress(e, restaurantProps, onSelectRestaurant)} tabIndex="0">
                <div className="card-content">
                    <div className="img-container">
                        <img className="restaurant-img"
                            alt={`Restaurant ${restaurantProps.name}`}
                            src={this.buildIconUrl(category)}
                            onError={this.handleBrokenImg}
                        />
                    </div>
                    <div className="detail-container"> 
                        <h2>{restaurantProps.name}</h2>
                        <h3>{category.name}</h3>
                    </div>
                </div>
            </li>
        );
    }
}
