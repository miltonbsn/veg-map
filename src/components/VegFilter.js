import React, { Component } from 'react';
import VegSelect from './VegSelect'

export default class VegFilter extends Component {
    render() {
        const { filterProps } = this.props;
        return (
            <div className="filter-options">
                <h2>Filter Results</h2>
                { filterProps.map(selectProp => <VegSelect selectProps={selectProp}/>) }
            </div>
        );
    }
}