import immutable from 'immutable';
import actions from './action-types';

const INITIAL_STATE = immutable.fromJS({
  isLoggedIn: false,
  loading: false,
  user: immutable.Map({
    id: '',
    name: '',
    username: '',
  }),
  applicationIds: immutable.List([]),
  applicationsById: immutable.Map({})
})

const addUserData = (state, userData) => {
  let newState = state;
  newState = newState.set('user', immutable.Map({
    id: userData?.id,
    name: userData?.name,
    username: userData?.username,
  }));
  return newState;
}

const addApplication = (state, applicationData) => {
  let newState = state;
  newState = newState.set(
    'applicationIds',
    state.get('applicationIds').push(applicationData.id),
  );
  newState = newState.setIn(['applicationsById', applicationData.id],
    {
      date: new Date(applicationData.date),
      id: applicationData.id,
      location: applicationData.location,
      name: applicationData.name,
      note: applicationData.note,
      period: applicationData.period,
      status: applicationData.status,
      title: applicationData.title,
      url: applicationData.url,
      user: applicationData.user,
    }
  );
  return newState;
}

const updateApplicationStatus = (state, data) => (
  state.updateIn(['applicationsById', data.id], (applicationData) => ({
    ...applicationData,
    status: data.status,
  }))
);

const deleteApplications = (state, data) => {
  let newState = state;

  newState = newState.set('applicationIds',
    newState.get('applicationIds').filter((id) => !data.ids.includes(id)
  ));

  newState = newState.update('applicationsById', (applicationsById) => 
    applicationsById.filter((value, key) => !data.ids.includes(key))
  )

  return newState;
}

const reducers = (state, action) => {
  if (typeof state === "undefined") {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case actions.USER_LOGGED_IN:
      return state.set('isLoggedIn', action.data.isLoggedIn);
    case actions.USER_LOGGED_OUT:
      break;
    case actions.ADD_USER_DATA:
      return addUserData(state, action.data.userData);
    case actions.GET_APPLICATIONS:
      break;
    case actions.ADD_APPLICATION:
      return addApplication(state, action.data);
    case actions.UPDATE_APPLICATION:
      break;
    case actions.UPDATE_APPLICATION_STATUS:
      return updateApplicationStatus(state, action.data);
    case actions.DELETE_APPLICATIONS:
      return deleteApplications(state, action.data);
    default:
      return state;
  }
}

export default reducers;