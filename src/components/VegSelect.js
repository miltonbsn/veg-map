import React, { Component } from 'react';

export default class VegSelect extends Component {
    render() {
        const { selectProps } = this.props;
        return (
            <select id="neighborhoods-select" 
                    name="neighborhoods" 
                    onChange="updateRestaurants()" 
                    aria-label="Choose neighborhood">
                {selectProps.options.map(option => (
                    <option 
                        value={option.value} 
                        aria-selected={option.selected}>
                        {option.text}
                    </option>
                ))}
            </select>
        );
    }
}
