import { types } from "../types/types";

const initialState = {
    uid: null,
    name: null,
    img: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                img: action.payload.photoURL
            };

        case types.logout:
            return initialState;

        default:
            return state;
    }
}