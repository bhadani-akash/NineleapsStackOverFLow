import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../actionTypes';

import axios from 'axios';

const baseuri = 'http://localhost:5000';

export const getUserAction = (/*id*/) => {
  return async (dispatch) => {
    try {
      // console.log(id, 'id');
      dispatch(fetchUsersRequest());
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // };

      const user = {
        data: '12345',
        name: 'Test User',
        designation: 'abc',
        shortBio: 'Hello world',
      };
      // const user = await axios.get(`${baseuri}/api/users/${id}`, config);
      console.log(user);
      dispatch(fetchUsersSuccess(user.data));
    } catch (error) {
      // error.message is the error message
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const fetchUsersSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: GET_USER_FAIL,
    payload: error,
  };
};

//update

export const updateUserAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(updateUsersRequest());
      const user = await axios.patch(`${baseuri}/api/users/${id}`, data);
      console.log(user);
      dispatch(updateUsersSuccess(user));
    } catch (error) {
      // error.message is the error message
      dispatch(updateUsersFailure(error.message));
    }
  };
};

export const updateUsersRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUsersSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUsersFailure = (error) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: error,
  };
};

export const userLoginAction = (response) => {
  return async (dispatch) => {
    try {
      //console.log(response)
      dispatch(userLoginRequest());
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const {data} = await axios.post(`${baseuri}/api/login`, response, config);

      console.log(data);
      dispatch(userLoginSuccess(data));
      localStorage.setItem('userAuthData', JSON.stringify(data.token));
    } catch (error) {
      // error.message is the error message
      dispatch(userLoginFailure(error.message));
    }
  };
};
export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};
export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};
export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAIL,
    payload: error,
  };
};
