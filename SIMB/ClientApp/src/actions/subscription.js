import { HmacSHA256 } from "crypto-js";
import { uiStartLoading } from "./ui";
import { Client } from 'khipu-client';

export const startSavingPlan = (planRequest) => {
    return async (dispatch, getState) => {

        const client = new Client({
            receiverId: '422636',
            secret: '85d05c5589a2aac5c6d3dcf7dba9023a9d92364a',
        });

        const response = await client.getBanks();

        console.log(response);

        const apiKey = "26FF97AD-D223-474A-99E9-929997D26LD2";

        const params = {
            "apiKey": apiKey,
            "commerceOrder": "orden-de-prueba",
            "subject": "Descripcion de la orden",
            "amount": 100,
            "email": "camilo.santander1313@gmail.com",
            "urlConfirmation": "https://localhost:44488/",
            "urlReturn": "https://localhost:44488/",
        };

    const apiKeyGyp = 'YnmNGr8woHeSO8KloDjrUF0QTzXAE45A';


        //const testUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKeyGyp}`;
        const testUrl = `https://sandbox.flow.cl/api/payment/create`;
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            //     "Accept": "application/json",
            },
        };

        //const myRequest = new Request(testUrl);

        // const resp = await fetch(testUrl);

        // const {data} = await resp.json();

        // console.log(data);

    };




    // return async (dispatch, getState) => {
    //     dispatch(uiStartLoading());

    //     const url = `${process.env.REACT_APP_FLOW_HOST}/plans/create`;

    //     planRequest.apiKey = process.env.REACT_APP_FLOW_API_KEY;
        
    //     const bodyArray = Object.entries(planRequest).sort();
        
    //     console.log(bodyArray);

    //     const toSign = bodyArray.map(([key, value]) => {
    //         return `${key}${value}`;
    //     }
    //     ).join("");

    //     const signature = HmacSHA256(toSign, process.env.REACT_APP_FLOW_SECRET);

    //     bodyArray.push(["s", signature]);
    //     planRequest.s = signature.toString();

    //     console.log(toSign);

    //     let body = [];

    //     for( const property in planRequest ) {
    //         const encodedKey = encodeURIComponent(property);
    //         const encodedValue = encodeURIComponent(planRequest[property]);
    //         body.push(encodedKey + "=" + encodedValue);
    //     }

    //     body = body.join("&");

    //     console.log(planRequest);
    //     const response = await fetch(url, {
    //         method: "POST",
    //         mode: "no-cors",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             // Authorization: `Bearer ${getState().auth.token}`,
    //         },
    //         // body: new URLSearchParams(planRequest),
    //     }).then((response) => {
    //         console.log(new URLSearchParams(planRequest).toString());
    //         console.log(response.json());
    //         console.log(response);
    //         return response;
    //     }).catch((error) => {
    //         console.log(error);
    //         return error;
    //     });

    //     console.log(response.toString());

    //     // try {
    //     //     const { uid } = getState().auth;
    //     //     const { data } = await axios.post(`/api/plans/${uid}`, planRequest);
    //     //     dispatch(addNewPlan(data));
    //     //     dispatch(uiFinishLoading());
    //     // } catch (error) {
    //     //     console.log(error);
    //     //     dispatch(uiSetError(error.message));
    //     //     dispatch(uiFinishLoading());
    //     // }
    // }
};