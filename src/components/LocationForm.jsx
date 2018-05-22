import React, { Component } from 'react';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    };

    handleChange = (address) => {
        this.setState({ address });
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.getValues({ id: this.randomPasswd(10),address, lat: latLng.lat, lng: latLng.lng }))
            .catch(error => console.error('Error', error))
        this.handleReset();
    }

    handleReset = () => this.setState({ address: '' });

    randomPasswd = (len) => {
        
        let passwd = '';

        do{
            passwd += Math.random().toString(36).substr(2);
        }while(passwd.length < len)
        passwd = passwd.substr(0, len);
        return passwd
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Location...',
                                className: 'u-full-width'
                            })}
                        />
                        <div>
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#c9f3ff', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className, style })}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}
export default LocationForm;