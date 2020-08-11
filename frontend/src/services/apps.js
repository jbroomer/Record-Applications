import axios from 'axios'

const baseURL = '/api/companies';

const userURL = '/api/users';

let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getApp = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
}

const createApp = (newObject) => {
    const config = {
        headers: { Authorization: token },
      }

    const request = axios.post(baseURL, newObject, config);
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

const getUser = () => {
    const request = axios.get(userURL);
    return request.then(response => response.data);
}

const createUser = (newObject) => {
    const request = axios.post(userURL, newObject);
    return request.then(response => response.data);
}

export default { getApp, createApp, deleteApp, updateApp, setToken, getUser, createUser };