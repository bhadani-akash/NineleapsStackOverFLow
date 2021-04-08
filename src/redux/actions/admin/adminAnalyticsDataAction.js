import {
  ADMIN_ANALYTICS_DATA_REQUEST,
  ADMIN_ANALYTICS_DATA_SUCCESS,
  ADMIN_ANALYTICS_DATA_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

export const adminAnalyticsData = () => {
  return async (dispatch) => {
    try {
      dispatch(adminAnalyticsDataRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const analyticsData = await axios.get(
        `${Ngrok.url}/api/admin/analytics`,
        config
      );
      dispatch(adminAnalyticsDataSuccess(analyticsData.data));
    } catch (error) {
      dispatch(adminAnalyticsDataFailure(error.message));
    }
  };
};

export const adminAnalyticsDataRequest = () => {
  return {
    type: ADMIN_ANALYTICS_DATA_REQUEST,
  };
};
export const adminAnalyticsDataSuccess = (analyticsData) => {
  return {
    type: ADMIN_ANALYTICS_DATA_SUCCESS,
    payload: analyticsData,
  };
};
export const adminAnalyticsDataFailure = (error) => {
  return {
    type: ADMIN_ANALYTICS_DATA_FAILURE,
    payload: error,
  };
};
