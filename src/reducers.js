import { combineReducers } from 'redux';

import fuelRefillsReducers from './Fuel/reducers';

const reducers = Object.assign(
    {},
    fuelRefillsReducers
);

export default combineReducers(reducers);
