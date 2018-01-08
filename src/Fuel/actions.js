
export function createFuelRecord(data) {
    return {type: 'FUEL_CREATE_RECORD', data};
}

export function updateFuelRecord(data) {
    return {type: 'FUEL_UPDATE_RECORD', data}
}

export function deleteFuelRecord(id) {
    return {type: 'FUEL_DELETE_RECORD', id}
}