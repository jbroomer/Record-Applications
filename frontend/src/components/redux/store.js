import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

window.reduxStore = store;

export default store;
