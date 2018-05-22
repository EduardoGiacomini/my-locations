import React from 'react';

export default props => {
    return (
        <button
            className="button-primary u-pull-right"
        >
            {props.label}
        </button>
    );
}