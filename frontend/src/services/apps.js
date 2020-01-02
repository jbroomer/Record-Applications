import axios from 'axios'

const baseURL = '/companies';

const getApp = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
}

const createApp = (newObject) => {
    const request = axios.post(baseURL, newObject);
    return request.then(response => response.data);
}

const deleteApp = (id) => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(response => response.data);
}

const updateApp = (id, newObject) => {
    const request = axios.put(`${baseURL}/${id}`, newObject);
    return request.then(response => response.data);
}

export default { getApp, createApp, deleteApp, updateApp };