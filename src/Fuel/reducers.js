import { FUEL_CREATE_RECORD } from './constants';

const fuelRefillsReducer = (state = [], action) => {

    console.log('Reducer Called');

    switch (action.type) {
        case FUEL_CREATE_RECORD:
            state = [...state, action.data];
            break;
        default:
            break;
    }

    return state;
}

const reducer = {
    fuelRefills: fuelRefillsReducer
};

export default reducer;