import React, { Component } from 'react';

export default class VegRestaurantListErrorBoundery extends Component {

    constructor(props) {
        super(props);
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if(this.props.restaurantsLoadedError) {
            return  <div className="map-error-container list-error"> 
                        <div className="error-section">
                            <h2> Ops... Something went wrong! </h2>
                            <span> It wasn't possible to load your vegetarian restaurants ;( </span>
                            <span> Check your connection or try later... </span>
                        </div>
                    </div>
        }
        return this.props.children;
    }
    
}
