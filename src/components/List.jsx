import React, { Component } from 'react';

import swal from 'sweetalert';

const style = {
    icon: {
        margin: '0 5px 0 0'
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    delete = (location) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you can not recover the location: ${location.address}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    this.props.delete(location.id)

                    swal({
                        title: "Poof",
                        text: "Your location has been deleted!",
                        icon: "success",
                        button: "Ok",
                    });

                }
            });
    }

    render() {
        return (
            <ol>
                {
                    this.props.locations !== null &&
                    this.props.locations.map((location, index) => {
                        const { address, lat, lng } = location;
                        return (
                            <li key={index}>
                                {address}
                                <ul>
                                    <li>{`Lat: ${lat}`}</li>
                                    <li>{`Lng: ${lng}`}</li>
                                </ul>
                                <div className="row">
                                    <div className="six columns">
                                        <button className="button u-full-width" onClick={() => this.delete(location)}><i className="fas fa-trash" style={style.icon}></i>Delete</button>
                                    </div>
                                    <div className="six columns">
                                        <button className="button u-full-width" onClick={() => this.props.view(location)}><i className="fas fa-map-marker-alt" style={style.icon}></i>View</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ol>
        );
    }
}
export default List;