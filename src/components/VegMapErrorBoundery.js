import React, { Component } from 'react';

export default class VegMapErrorBoundery extends Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false}; 
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return  <div className="map-error-container"> 
                        <div className="error-section">
                            <h2> Ops... Something went wrong! </h2>
                            <span> It wasn't possible to load your map. Please check your internet conection! </span>
                        </div>
                    </div>
        }
        return this.props.children;
    }
}
