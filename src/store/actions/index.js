import { LOCATIONS } from '../constants';

export const setLocation = (locations) => {
    const action = {
        type: LOCATIONS,
        locations
    };
    return action;
}