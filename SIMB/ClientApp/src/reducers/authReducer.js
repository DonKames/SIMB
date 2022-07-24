import { types } from "../types/types";

const initialState = {
    uid: null,
    name: null,
    img: null,
    email: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                img: action.payload.photoURL,
                email: action.payload.email,
            };

        case types.logout:
            return initialState;

        default:
            return state;
    }
}