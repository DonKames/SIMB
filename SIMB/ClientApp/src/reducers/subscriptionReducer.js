import { types } from "../types/types";



export const subscriptionReducer = (state, action) => {
    switch (action.type) {
        case types.subscriptionsLoad:
            console.log(action);
            return action.payload;


        default:
            return { ...state };
    }
}
