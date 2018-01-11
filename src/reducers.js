import { combineReducers } from 'redux';

import fuelRefillsReducers from './Fuel/reducers';

export default combineReducers({
    fuelRefills: fuelRefillsReducers
})
