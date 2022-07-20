import { HmacSHA256 } from "crypto-js";
import { uiStartLoading } from "./ui";

export const startSavingPlan = (planRequest) => {
    return async (dispatch, getState) => {
        dispatch(uiStartLoading());

        const url = `${process.env.REACT_APP_FLOW_HOST}/plans/create`;

        planRequest.apiKey = process.env.REACT_APP_FLOW_API_KEY;
        
        const bodyArray = Object.entries(planRequest).sort();
        
        console.log(bodyArray);

        const toSign = bodyArray.map(([key, value]) => {
            return `${key}${value}`;
        }
        ).join("");

        const signature = HmacSHA256(toSign, process.env.REACT_APP_FLOW_SECRET);

        bodyArray.push(["s", signature]);
        planRequest.s = signature.toString();

        console.log(toSign);

        let body = [];

        for( const property in planRequest ) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(planRequest[property]);
            body.push(encodedKey + "=" + encodedValue);
        }

        body = body.join("&");

        console.log(planRequest);
        const response = await fetch(url, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                // Authorization: `Bearer ${getState().auth.token}`,
            },
            // body: new URLSearchParams(planRequest),
        }).then((response) => {
            console.log(new URLSearchParams(planRequest).toString());
            console.log(response.json());
            console.log(response);
            return response;
        }).catch((error) => {
            console.log(error);
            return error;
        });

        console.log(response.toString());

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