import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class MainMap extends Component {

    render() {
        const { mapProps, restaurants } = this.props;
        return (
            <section id="map-container">
                <div id="map" role="application" aria-hidden="true"></div>
                <div style={{ height: '60vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: mapProps.mapKey }}
                        defaultCenter={mapProps.center}
                        defaultZoom={mapProps.zoom}
                    >
                    </GoogleMapReact>
                </div>
            </section>
        );
    }

}

