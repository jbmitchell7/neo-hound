import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY
const API_URL = 'https://api.nasa.gov/neo/rest/v1';

const neoFetch = async (url: String, method = 'GET', payload = {}) => {

    let headers = {
        'Content-Type': 'application/json;charset=utf-8',
    }

    try {

        const options = {
            headers,
            method,
            url: `${API_URL}${url}api_key=${apiKey}`,
            data: payload,
        }

        const response = await axios(options);

        return response.data

    } catch (err) {
        throw new Error("Error retrieving data")
    }
}

//export const fetchPost = async (url: String, payload: any) => neoFetch(url, 'POST', payload);
export const fetchGet = async (url: String, payload: any) => neoFetch(url, 'GET', payload);
//export const fetchPut = async (url: String, payload: any) => neoFetch(url, 'PUT', payload);
//export const fetchDelete = async (url: String, payload: any) => neoFetch(url, 'DELETE', payload);