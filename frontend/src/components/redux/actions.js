import axios from 'axios';
import actions from './action-types';

const applicationBaseUrl = '/api/companies';
const loginBaseUrl = '/api/login';
// const userBaseUrl = '/api/users';

const setUserLoggedIn = (isLoggedIn) => ({
  type: actions.SET_USER_LOGGED_IN,
  data: {
    isLoggedIn,
  },
});

const addUserData = (userData) => ({
  type: actions.ADD_USER_DATA,
  data: {
    userData,
  },
});

const addApplication = (app) => ({
  type: actions.ADD_APPLICATION,
  data: {
    date: new Date(app.date),
    id: app.id,
    location: app.location,
    name: app.name,
    note: app.note,
    period: app.period,
    status: app.status,
    title: app.title,
    url: app.url,
    user: app.user,
  },
});

const setApplicationStatus = (id, status) => ({
  type: actions.UPDATE_APPLICATION_STATUS,
  data: {
    id,
    status,
  },
});

const deleteApplications = (ids) => ({
  type: actions.DELETE_APPLICATIONS,
  data: { ids },
});

// const setIsLoading = (isLoading) => ({
//   type: actions.SET_IS_LOADING,
//   data: {
//     isLoading,
//   },
// });

// const checkIsLoggedIn = () => !!window.localStorage.getItem('loggedCompanyappUser');

const login = (username, password) => (dispatch) => {
  axios
    .post(loginBaseUrl, {
      username,
      password,
    })
    .then((response) => {
      dispatch(setUserLoggedIn(true));
      dispatch(addUserData(response.data));
      window.localStorage.setItem(
        'loggedCompanyappUser',
        JSON.stringify(response.data),
      );
      window.location.href = '/';
    });
};

const loadAllApplications = () => (dispatch) => {
  axios.get(`${applicationBaseUrl}/applications`).then((apps) => {
    apps.data.forEach((app) => {
      dispatch(addApplication(app));
    });
  });
};

const requestAddApplication = (applicationData) => (dispatch) => axios({
  method: 'post',
  url: '/createApp',
  baseURL: applicationBaseUrl,
  data: applicationData,
}).then(() => {
  dispatch(addApplication(applicationData));
});

const updateApplicationStatus = (id, status) => (dispatch) => {
  axios({
    method: 'post',
    url: '/updateStatus',
    baseURL: applicationBaseUrl,
    data: {
      id,
      status,
    },
  })
    .then(() => {
      dispatch(setApplicationStatus(id, status));
    })
    .catch((err) => {
      console.error('updateApplicationStatus:', err);
    });
};

const requestDeleteApplications = (ids) => (dispatch) => axios({
  method: 'post',
  url: '/delete',
  baseURL: applicationBaseUrl,
  data: {
    ids,
  },
})
  .then(() => {
    dispatch(deleteApplications(ids));
  })
  .catch((err) => {
    console.error('requestDeleteApplication:', err);
  });

export default {
  login,
  addUserData,
  loadAllApplications,
  updateApplicationStatus,
  requestAddApplication,
  requestDeleteApplications,
};
