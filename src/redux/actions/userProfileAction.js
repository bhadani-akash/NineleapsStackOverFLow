import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
} from "../actionTypes";
import axios from "axios";

import Ngrok from "../../constants/Ngrok";

export const userProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch(userProfileRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const userProfileData = await axios.get(
        `${Ngrok.url}/api/users/${id}`,
        config
      );
      dispatch(userProfileSuccess(userProfileData.data));
    } catch (error) {
      dispatch(userProfileFailure(error.message));
    }
  };
};

export const userProfileRequest = () => {
  return {
    type: USER_PROFILE_REQUEST,
  };
};
export const userProfileSuccess = (userProfileData) => {
  return {
    type: USER_PROFILE_SUCCESS,
    payload: userProfileData,
  };
};
export const userProfileFailure = (error) => {
  return {
    type: USER_PROFILE_FAILURE,
    payload: error,
  };
};

export const updateUserProfile = (id, data) => {
  return async (dispatch) => {
    try {
      console.log("update user action ", id, data);
      dispatch(updateUserProfileRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const userProfileData = await axios.patch(
        `${Ngrok.url}/api/users/${id}`,
        data,
        config
      );
      console.log("server res", userProfileData.data);
      dispatch(updateUserProfileSuccess(userProfileData.data));
    } catch (error) {
      dispatch(updateUserProfileFailure(error.message));
    }
  };
};
export const updateUserProfileRequest = () => {
  return {
    type: UPDATE_USER_PROFILE_REQUEST,
  };
};
export const updateUserProfileSuccess = (userProfileData) => {
  return {
    type: UPDATE_USER_PROFILE_SUCCESS,
    payload: userProfileData,
  };
};
export const updateUserProfileFailure = (error) => {
  return {
    type: UPDATE_USER_PROFILE_FAILURE,
    payload: error,
  };
};
