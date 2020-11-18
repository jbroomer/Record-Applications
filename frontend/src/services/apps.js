import axios from 'axios';

let token;

const baseURL = '/api/companies';
const userURL = '/api/users';

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  axios.defaults.headers.common.Authorization = token;
};

const getApplications = () => {
  const request = axios.get(`${baseURL}/applications`);
  return request.then((response) => response.data);
};

const createApp = (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const request = axios.post(baseURL, newObject, config);
  return request.then((response) => response.data);
};

const deleteApp = (ids) => {
  const request = axios({
    url: '/delete',
    baseURL,
    method: 'post',
    data: {
      ids,
    },
  });
  return request.then((response) => response.data);
};

/**
 * Changes the application's status
 * @param {String} id id of the application being updated
 * @param {String} status new status value
 */
const updateApplicationStatus = (id, status) => {
  const request = axios({
    url: '/updateStatus',
    baseURL,
    method: 'post',
    data: {
      id,
      status,
    },
  });
  return request.then((response) => response.data);
};

/**
 * Update the application fields
 * @param {String} id id of the application being updated
 * @param {Object} application new application values
 */
const updateApplication = (id, application) => axios({
  url: '/updateApplication',
  baseURL,
  method: 'post',
  data: {
    id, // application id
    ...application,
  },
});

const getUser = () => {
  const request = axios.get(userURL);
  return request.then((response) => response.data);
};

const createUser = (newObject) => {
  const request = axios.post(userURL, newObject);
  return request.then((response) => response.data);
};

export default {
  getApplications,
  createApp,
  deleteApp,
  updateApplicationStatus,
  updateApplication,
  setToken,
  getUser,
  createUser,
};
