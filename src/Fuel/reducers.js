
import { FUEL_CREATE_RECORD } from './constants';
import { combineReducers } from 'redux';

const fuelRefillsReducer = (state = [], action) => {

    console.log('Reducer Called');

    switch (action.type) {
        case FUEL_CREATE_RECORD:
            state = [...state, action.data];
            // window.localStorage.setItem('fuelRefills', state);
            break;
        default:
            return state;
    }
}

const reducer = combineReducers({
    fuelRefills: fuelRefillsReducer
});

export default reducer;