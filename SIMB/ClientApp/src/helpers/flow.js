import { HmacSHA256 } from "crypto-js";


const baseUrl = `https://sandbox.flow.cl/api`;

export const sendFlow = (service, params, method = "GET") => {

    params.apiKey = process.env.REACT_APP_FLOW_API_KEY;

    const Url = `${baseUrl}/${service}`;

    const data = orderAscParams(params);
    const signature = signParams(params);

    const init = prepareInit(method, data, signature);

    try {
        return fetch(Url, init);
    } catch (error) {
        console.log(error);
    }
};



const prepareInit = (method, data, signature) => {
    const upperMethod = method.toUpperCase();
    return {
        method: upperMethod,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            //"Content-Type": "application/json",
            //"Accept": "application/json",
        },
        body: data + "&s=" + signature,
    };
}



/**
 * It takes an object and returns a string of the object's keys and values in alphabetical order
 * @param params - {
 */
export const orderAscParams = (params) => {
    const keys = Object.keys(params)
        .map(key => key)
        .sort((a, b) => {
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
        });
    let data = [];
    keys.map(key => {
        data.push(key + "=" + params[key]);
    });
    return data.join("&");
}



/**
 * It takes an object, sorts the keys alphabetically, then joins the key/value pairs into a string, and
 * finally signs the string with a secret key.
 * @param params - {
 * @returns A string of characters.
 */
export const signParams = (params) => {
    const keys = Object.keys(params)
        .map(key => key)
        .sort((a, b) => {
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
        });
    let toSign = [];
    keys.map(key => {
        toSign.push(key + "=" + params[key]);
    });
    toSign = toSign.join("&");
    console.log(process.env.REACT_APP_FLOW_SECRET);
    return HmacSHA256(toSign, process.env.REACT_APP_FLOW_SECRET);
}