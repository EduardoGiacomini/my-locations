import { LOCATIONS } from '../constants';

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case LOCATIONS:
            const { locations } = action;
            return locations;
        default:
            return state;
    }
}