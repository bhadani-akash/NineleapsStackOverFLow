import {
  ADMIN_COUNT_DATA_REQUEST,
  ADMIN_COUNT_DATA_SUCCESS,
  ADMIN_COUNT_DATA_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

export const adminCountData = () => {
  return async (dispatch) => {
    try {
      dispatch(adminCountDataRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const countData = await axios.get(`${Ngrok.url}/api/admin/count`, config);
      dispatch(adminCountDataSuccess(countData.data));
    } catch (error) {
      dispatch(adminCountDataFailure(error.message));
    }
  };
};

export const adminCountDataRequest = () => {
  return {
    type: ADMIN_COUNT_DATA_REQUEST,
  };
};
export const adminCountDataSuccess = (countData) => {
  return {
    type: ADMIN_COUNT_DATA_SUCCESS,
    payload: countData,
  };
};
export const adminCountDataFailure = (error) => {
  return {
    type: ADMIN_COUNT_DATA_FAILURE,
    payload: error,
  };
};
