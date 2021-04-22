import {
  ADMIN_ANALYTICS_FIND_REQUEST,
  ADMIN_ANALYTICS_FIND_SUCCESS,
  ADMIN_ANALYTICS_FIND_FAILURE,
} from "../../actionTypes";
import axios from "axios";
import Ngrok from "../../../constants/Ngrok";

export const adminAnalyticsFind = (data) => {
  return async (dispatch) => {
    try {
      dispatch(adminAnalyticsFindRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const analyticsFind = await axios.post(
        `${Ngrok.url}/api/admin/find`,
        data,
        config
      );
      dispatch(adminAnalyticsFindSuccess(analyticsFind.data));
    } catch (error) {
      dispatch(adminAnalyticsFindFailure(error.message));
    }
  };
};
export const adminAnalyticsFindRequest = () => {
  return {
    type: ADMIN_ANALYTICS_FIND_REQUEST,
  };
};
export const adminAnalyticsFindSuccess = (analyticsFind) => {
  return {
    type: ADMIN_ANALYTICS_FIND_SUCCESS,
    payload: analyticsFind,
  };
};
export const adminAnalyticsFindFailure = (error) => {
  return {
    type: ADMIN_ANALYTICS_FIND_FAILURE,
    payload: error,
  };
};
