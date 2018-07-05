import React, { Component } from 'react';
import VegSelect from './VegSelect'

export default class VegFilter extends Component {
    render() {
        const { filterProps, filterByType } = this.props;
        return (
            <div className="filter-options">
                <h2>Filter Results</h2>
                { filterProps.map(selectProp => <VegSelect key={selectProp.name} 
                                                           selectProps={selectProp}
                                                           filterByType={filterByType}/>) }
            </div>
        );
    }
}