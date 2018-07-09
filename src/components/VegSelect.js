import React, { Component } from 'react';

export default class VegSelect extends Component {
    render() {
        const { selectProps, filterByType } = this.props;
        return (
            <select id="neighborhoods-select" 
                    name="neighborhoods" 
                    onChange={(event) => filterByType(event.target.value)}
                    aria-label="Choose cousine type"
                    >
                {selectProps.options.map(option => (
                    <option 
                        key={option.value}
                        value={option.value} 
                        aria-selected={option.selected}>
                        {option.text}
                    </option>
                ))}
            </select>
        );
    }
}
