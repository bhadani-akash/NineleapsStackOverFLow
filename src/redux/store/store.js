import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// import {composeWithDevTools} from 'redux-devtools-extension';
// import devToolsEnhancer from 'remote-redux-devtools';
import {composeWithDevTools} from 'remote-redux-devtools';

import getUserReducer from '../reducers/users/getUserReducer';
import userLoginReducer from '../reducers/users/userLoginReducer';

const middleWares = [thunk];

const reducer = combineReducers({
  userInfo: getUserReducer,

  loginData: userLoginReducer,
});

const store = createStore(
  // reducer,
  // devToolsEnhancer(applyMiddleware(...middleWares)),
  reducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);

export default store;
