import React from 'react';

const style = {
    icon: {
        margin: '0 5px 0 0'
    },
    buttonDelete: {
        margin: '0 2.5px 0 0'
    },
    buttonView: {
        margin: '0 0 0 2.5px'
    }
}

export default props => {
    return (
        <ol>
            {
                props.locations !== null &&
                props.locations.map((location, index) => {
                    const { id, address, lat, lng } = location;
                    return (
                        <li key={index}>
                            {address}
                            <ul>
                                <li>{`Lat: ${lat}`}</li>
                                <li>{`Lng: ${lng}`}</li>
                            </ul>
                            <button style={style.buttonDelete} onClick={() => props.delete(id)}><i className="fas fa-trash" style={style.icon}></i>Delete</button>
                            <button style={style.buttonView}><i className="fas fa-map-marker-alt" style={style.icon}></i>View</button>
                        </li>
                    );
                })
            }
        </ol>
    );
}