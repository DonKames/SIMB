import { types } from "../../types/types";

const initialState = {
    warehouses: [],
    employees: [],
};

export const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.warehousesLoad:
            return {
                ...state,
                warehouses: action.payload,
            };
        case types.warehouseAddNew:
            return {
                ...state,
                warehouses : [ action.payload, ...state.warehouses ],
            };
        case types.warehouseDisable:
            return {
                ...state,
                [action.payload.id]: action.payload
            };


        case types.employeeAddNew:
            return {
                ...state,
                employees: [ action.payload, ...state.employees ],
            };
        case types.employeesLoad:
            return {
                ...state,
                employees: action.payload,
            };
        default:
            return state;
    }
}