import { types } from "../../types/types";

const initialState = {
    warehouses: [],
};

export const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.warehouseAddNew:
            return {
                ...state,
                warehouses : [ action.payload, ...state.warehouses ],
            };
        case types.warehouseUpdate:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case types.warehouseDisable:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }
}