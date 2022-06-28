import { types } from "../../types/types";

const initialState = {
    
    warehouse: {
        subscribed: false,
        mainWarehouse: null,
        activeWarehouse: "",
    }, //Main Warehouse name.
    warehouses: [],
    employees: [],
    categories: [],
    products: [],
    product: [],
    subCategories: [],
    skus: [],
    supplyHistory: [],
};

export const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.warehousesLoad:
            return {
                ...state,
                warehouses: action.payload,
            };
        case types.warehouseLoad:
            console.log(action.payload);
            return {
                ...state,
                warehouse: {...state.warehouse, ...action.payload},
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
        case types.warehouseSetMain:
            return{
                ...state,
                warehouse: {
                    ...state.warehouse,
                    mainWarehouse: action.payload
                }
            };
        case types.warehouseSetActive:
            return{
                ...state,
                warehouse: {
                    ...state.warehouse,
                    activeWarehouse: action.payload
                }
            };
        case types.warehouseDelete:
            return{
                ...state,
                warehouses: state.warehouses.filter(warehouse => warehouse.id !== action.payload)
            };
        case types.warehouseEdit:
            //console.log(action.payload);
            return{
                ...state,
                warehouses: state.warehouses.map(warehouse => warehouse.id === action.payload.id ? action.payload.warehouse : warehouse)
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
        case types.employeeEdit:
            return{
                ...state,
                employees: state.employees.map(employee => employee.id === action.payload.id ? action.payload.employee : employee)
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
        case types.categoryDelete:
            return{
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload)
            };
        case types.categoryEdit:
            return{
                ...state,
                categories: state.categories.map(category => category.id === action.payload.id ? action.payload.category : category)
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
        case types.subCategoryDelete:
            return{
                ...state,
                subCategories: state.subCategories.filter(subCategory => subCategory.id !== action.payload)
            };
        case types.subCategoryEdit:
            return{
                ...state,
                subCategories: state.subCategories.map(subCategory => subCategory.id === action.payload.id ? action.payload.subCategory : subCategory)
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
        case types.productSkuAddNew:
            return {
                ...state,
                product: [ action.payload, ...state.product ],
            };
        case types.productSkuLoad:
            return {
                ...state,
                skus: action.payload,
            };
        case types.productUpdateStock:
            return{
                ...state,
                product: state.product.map(product => product.id === action.payload.id ? action.payload.product : product)
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

        
        case types.supplyHistoryAddNew:
            return {
                ...state,
                supplyHistory: [ action.payload, ...state.supplyHistory ],
            };
        case types.supplyHistoryLoad:
            return {
                ...state,
                supplyHistory: action.payload,
            };


        default:
            return state;
    }
}