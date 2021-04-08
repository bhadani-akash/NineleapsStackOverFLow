import {
  GET_ALLTAGS_REQUEST,
  GET_ALLTAGS_SUCCESS,
  GET_ALLTAGS_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

export const getAllTags = () => {
  return async (dispatch) => {
    try {
      dispatch(getAllTagsRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const allTags = await axios.get(`${Ngrok.url}/api/tag/`, config);
      dispatch(getAllTagsSuccess(allTags.data));
    } catch (error) {
      dispatch(getAllTagsFailure(error.message));
    }
  };
};
export const getAllTagsRequest = () => {
  return {
    type: GET_ALLTAGS_REQUEST,
  };
};
export const getAllTagsSuccess = (tags) => {
  return {
    type: GET_ALLTAGS_SUCCESS,
    payload: tags,
  };
};
export const getAllTagsFailure = (error) => {
  return {
    type: GET_ALLTAGS_FAILURE,
    payload: error,
  };
};
