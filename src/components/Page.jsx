import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setLocation } from '../store/actions/index';

import LocationForm from './LocationForm';
import List from './List';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = { locations: [] };
    };

    componentDidMount = () => {

        const locationsJSON = localStorage.getItem('locations');

        if (locationsJSON !== null) {
            const locations = JSON.parse(locationsJSON);

            this.setState({ locations });

            this.props.setLocation(locations);
        }

    }

    getValues = (location) => {

        const { locations } = this.state;

        locations.push(location);

        this.setState({ locations });

        this.props.setLocation(locations);

        this.sendToLocalStorage();

    }

    sendToLocalStorage = () => {

        const { locations } = this.state;

        const locationsJSON = JSON.stringify(locations);

        localStorage.setItem('locations', locationsJSON);

    }

    deleteLocation = (id) => {

        const locationsJSON = localStorage.getItem('locations');

        const locations = JSON.parse(locationsJSON);

        const newLocations = locations.filter(location => {
            return location.id !== id;
        });

        this.setState({ locations: newLocations });

        this.props.setLocation(newLocations);

        const newLocationsJSON = JSON.stringify(newLocations);

        localStorage.setItem('locations', newLocationsJSON);

    }

    render() {
        return (
            <div className="container">
                <h2>My Locations</h2>
                <LocationForm
                    getValues={this.getValues}
                />
                <List
                    locations={this.props.locations}
                    delete={this.deleteLocation}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { locations } = state;
    return { locations };
}
export default connect(mapStateToProps, { setLocation })(Page);