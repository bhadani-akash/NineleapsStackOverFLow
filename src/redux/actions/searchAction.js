import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../actionTypes";
import axios from "axios";
import Ngrok from "../../constants/Ngrok";

export const search = (keyword) => {
  return async (dispatch) => {
    try {
      dispatch(searchRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const searchData = await axios.get(
        `${Ngrok.url}/api/search/${keyword}`,
        config
      );
      dispatch(searchSuccess(searchData.data));
    } catch (error) {
      dispatch(searchFailure(error.message));
    }
  };
};

export const searchRequest = () => {
  return {
    type: SEARCH_REQUEST,
  };
};
export const searchSuccess = (searchData) => {
  return {
    type: SEARCH_SUCCESS,
    payload: searchData,
  };
};
export const searchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    payload: error,
  };
};
