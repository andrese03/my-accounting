import { createRecord, updateRecord, deleteRecord } from './Fuel/actions.js'
import { createStore, combineReducers } from 'redux';

const fuelRefillsReducer = (state = [], action) => {

    console.log('Reducer Called');

    switch (action.type) {
        case 'FUEL_CREATE_RECORD':
            console.log(action);
            break;
        default:
            return state;
    }

}

const reducer = combineReducers({
    fuelRefills: fuelRefillsReducer
});

const store = createStore(reducer);

export default store;