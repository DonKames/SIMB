import { types } from "../types/types";

const initialState = {
    uid: null,
    displayName: null,
    photoURL: null,
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
            return {};

        default:
            return state;
    }
}