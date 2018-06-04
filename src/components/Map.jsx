import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ pointer }) => pointer;

const style = {
    size: {
        height: '325px',
        width: '100%',
        position: 'relative'
    },
    pointerSize: {
        width: '40px',
        height: '40px'
    },
    textCenter: {
        textAlign: 'center'
    },
    containerMap: {
        height: 'auto',
        width: 'auto',
        border: '2px solid red',
        borderRadius: '10px'
    }
};

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            center: { lat: -14.235004, lng: -51.92527999999999 },
            zoom: 10,
            mapStyle: {
                styles: [
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#e9e5dc"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#b8cb93"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.medical",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ccdca1"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.sports_complex",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "hue": "#ff0000"
                            },
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 99
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#808080"
                            },
                            {
                                "lightness": 54
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#767676"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": 43
                            },
                            {
                                "lightness": -11
                            },
                            {
                                "color": "#89cada"
                            }
                        ]
                    }
                ]
            }
        }
    };

    static defaultProps = {
        center: { lat: -14.235004, lng: -51.92527999999999 },
        zoom: 10
    };

    componentDidMount = () => {
        const { lat, lng } = this.props.location;
        this.setState({ location: this.props.location, center: { lat, lng } });
    }

    render() {
        return (
            <div style={style.size}>
                <h2 className="u-full-width" style={style.textCenter}>My Locations</h2>
                <i className="fas fa-arrow-left icon-back" onClick={this.props.back}></i>
                <br />
                <br />
                {
                    this.state.location !== null &&
                    <ul>
                        <li>
                            {this.state.location.address}
                            <ul>
                                <li>{`Lat: ${this.state.location.lat}`}</li>
                                <li>{`Lng: ${this.state.location.lng}`}</li>
                            </ul>
                        </li>
                    </ul>
                }
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDO4Ph5tAs_j395-ru85zTSEMos-nA8iA4' }}
                        defaultCenter={this.props.center}
                        center={this.state.center}
                        defaultZoom={this.props.zoom}
                        zoom={this.state.zoom}
                        options={this.state.mapStyle}
                    >
                        <AnyReactComponent
                            lat={this.props.location.lat}
                            lng={this.props.location.lng}
                            pointer={<div><div className='pin bounce'></div><div className='pulse'></div></div>}
                        />
                    </GoogleMapReact>
            </div>
        )
    }
}
export default Map;