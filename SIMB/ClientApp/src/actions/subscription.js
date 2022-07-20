import { types } from "../types/types";
import { uiStartLoading } from "./ui";

export const startSavingPlan = (planRequest) => {
    return async (dispatch, getState) => {
        dispatch(uiStartLoading());

        const url = `${process.env.REACT_APP_FLOW_HOST}/api/plans/create`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${getState().auth.token}`,
            },
            body: JSON.stringify(planRequest),
        });


        console.log(response.json());

        // try {
        //     const { uid } = getState().auth;
        //     const { data } = await axios.post(`/api/plans/${uid}`, planRequest);
        //     dispatch(addNewPlan(data));
        //     dispatch(uiFinishLoading());
        // } catch (error) {
        //     console.log(error);
        //     dispatch(uiSetError(error.message));
        //     dispatch(uiFinishLoading());
        // }
    }
};