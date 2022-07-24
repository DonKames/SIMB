import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { orderAscParams, sendFlow, signParams } from "../helpers/flow";
import { types } from "../types/types";



export const startLoadingSubscriptionState = () => {
    return async ( dispatch, getState ) => {

		//const subscriptions = [];

		const { uid } = getState().auth;
		try {
            
			const subscriptionsSnapshot = await getDoc( doc( db, uid, "userInfo",  ) );
			const subscriptions = subscriptionsSnapshot.data();

			dispatch(loadSubscriptions(subscriptions));
		} catch (error) {
			console.log(error);
		}
	}
}

const loadSubscriptions = (subscriptions) => {
    return {
        type: types.subscriptionsLoad,
        payload: subscriptions,
    };
}


















// export const startSavingPlan = (planRequest) => {
    
// }




    //! todo esto funca, el problema esta en los CORS
    // return async (dispatch) => {
    //     send("plans/create", planRequest, "POST")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
    // };

    //await fetch(baseUrl+serviceName, init)
    //     .then(response => response.json())
    //     .then(data => {console.log(data);})
    //     .catch(error => {
    //         console.log(error);
    //     });
    

    // return async (dispatch) => {
    //     dispatch(uiStartLoading());

    //     const baseUrl = `https://sandbox.flow.cl/api/`;

    //     const serviceName = `plans/create`;

    //     planRequest.apiKey = process.env.REACT_APP_FLOW_API_KEY;

    //     let data = orderAscParams(planRequest);
    //     const signature = signParams(planRequest);

        
    //     data += "&s=" + signature;
        
    //     console.log(data);
    //     const init = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         //     "Accept": "application/json",
    //         },
    //         // withCredentials: true,
    //         // credentials: 'same-origin',
    //         body: data,
    //     };

    //     await fetch(baseUrl+serviceName, init)
    //     .then(response => response.json())
    //     .then(data => {console.log(data);})
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }
// }

export const startPayingSubscription = async (params) => {
    

        const commerceOrder = Date.now();
        params.commerceOrder = commerceOrder;
        params.subject = "Plan Básico";
        params.urlConfirmation = "https://localhost:44488/";
        params.urlReturn = "https://localhost:44488/";
        params.apiKey = process.env.REACT_APP_FLOW_API_KEY;

        return await sendFlow("payment/create", params, "POST")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

        //return await resp;

        // let data = orderAscParams(params);
        // const signed = signParams(params);
        // data += "&s=" + signed;

        // const testUrl = `https://sandbox.flow.cl/api/payment/create`;
        // const init = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     body: data,
        // };

        // fetch(testUrl, init)
        // .then(response => response.json())
        // .then(data => {console.log(data);})
        // .catch(error => {
        //     console.log(error);
        // });
    
}




//!Este es el que funca.
export const startSavingPlan = (planRequest) => {
    return async (dispatch, getState) => {

        const apiKey = "26FF97AD-D223-474A-99E9-929997D26LD2";

        const params = {
            "apiKey": apiKey,
            "commerceOrder": "orden-de-prueba",
            "subject": "Descripcion de la orden",
            "amount": 10000,
            "email": "camilo.santander1313@gmail.com",
            "urlConfirmation": "https://localhost:44488/",
            "urlReturn": "https://localhost:44488/",
        };

        let data = orderAscParams(params);
        const signed = signParams(params);


        console.log(signed);

        
        data += "&s=" + signed;

        //const apiKeyGyp = 'YnmNGr8woHeSO8KloDjrUF0QTzXAE45A';

        //const testUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKeyGyp}`;
        const testUrl = `https://sandbox.flow.cl/api/payment/create`;
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            //     "Accept": "application/json",
            },
            // withCredentials: true,
            // credentials: 'same-origin',
            body: data,
        };
    
        //const myRequest = new Request(testUrl);

        //console.log(data);
        

        
        const resp = await fetch(testUrl, init)
        .then(response => response.json())
        .then(data => {console.log(data);})
        .catch(error => {
            console.log(error);
        });

        

    };
}



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
// };