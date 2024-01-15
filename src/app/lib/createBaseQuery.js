import axios from "axios";
import {API_URL} from "@/config";
import {getToken} from "@/utils/getToken";

export default function createBaseQuery() {
    return async function fetcher(args) {
        const {
            body,
            path = "",
            ignoreToken,
            responseType,
            credentials,
            withCredentials,
            method = "POST",
            headers: extraHeaders,
            ...restOfArgs
        } = args;
        try {
            const headers = Object.assign(
                {
                    "Content-Type": "application/json",
                },
                extraHeaders
            );

            if (!ignoreToken) {
                const token = await getToken();
                headers.authorization = `Bearer ${token}`;
            }

            const requestProps = {
                method,
                headers,
                data: body,
                url: API_URL + path,
            };
            if (responseType) {
                requestProps.responseType = responseType;
            }
            if (credentials) {
                requestProps.withCredentials = true;
            }

            const result = await axios(Object.assign(requestProps, restOfArgs));

            return result.data;
        } catch (error) {
            // if getting unauthrized then try to get new token
            if (error.response?.status === 403) {
                getToken(true);
            }

            let {status, message} = makeErrorResponse({...error.response});
            return Promise.reject({status, message});
        }
    };
}

function makeErrorResponse({status, data = {}}) {
    let message = data.message || "Internal Server Error";

    if (data.errors) {
        message = Object.values(data.errors).map((error) => error);
    }
    return {
        status: status || 500,
        message,
    };
}
