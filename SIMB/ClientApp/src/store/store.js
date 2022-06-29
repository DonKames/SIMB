import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import { warehouseReducer } from "../reducers/modules/warehouseReducer";
//import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";

//Archivo de configuración de Redux

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//Unir los reducers en una sola variable
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    warehouse: warehouseReducer,
});

//Crear el store de Redux
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);