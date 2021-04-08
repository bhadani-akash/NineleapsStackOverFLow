import {
  VIEW_PROFILE_REQUEST,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_FAILURE,
} from "../actionTypes";
import axios from "axios";

import Ngrok from "../../constants/Ngrok";

export const viewProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch(viewProfileRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const viewProfileData = await axios.get(
        `${Ngrok.url}/api/users/${id}`,
        config
      );
      dispatch(viewProfileSuccess(viewProfileData.data));
    } catch (error) {
      dispatch(viewProfileFailure(error.message));
    }
  };
};

export const viewProfileRequest = () => {
  return {
    type: VIEW_PROFILE_REQUEST,
  };
};
export const viewProfileSuccess = (viewProfileData) => {
  return {
    type: VIEW_PROFILE_SUCCESS,
    payload: viewProfileData,
  };
};
export const viewProfileFailure = (error) => {
  return {
    type: VIEW_PROFILE_FAILURE,
    payload: error,
  };
};
