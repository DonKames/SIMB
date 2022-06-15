import { types } from "../../types/types";

const initialState = {
    warehouse: '',
    warehouses: [],
    employees: [],
    categories: [],
    subCategories: [],
    products: [],
    product: [],
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


        case types.categoryAddNew:
            return {
                ...state,
                categories: [ action.payload, ...state.categories ],
            };
        case types.categoriesLoad:
            return {
                ...state,
                categories: action.payload,
            };


        case types.subCategoryAddNew:
            return {
                ...state,
                subCategories: [ action.payload, ...state.subCategories ],
            };
        case types.subCategoriesLoad:
            return {
                ...state,
                subCategories: action.payload,
            };


        case types.productAddNew:
            return {
                ...state,
                product: [ action.payload, ...state.product ],
            };
        case types.productLoad:
            return {
                ...state,
                product: action.payload,
            };


        case types.productsAddNew:
            return {
                ...state,
                products: [ action.payload, ...state.products ],
            };
        case types.productsLoad:
            return {
                ...state,
                products: action.payload,
            };


        default:
            return state;
    }
}