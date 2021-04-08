import {
  GET_SINGLETAG_POSTS_REQUEST,
  GET_SINGLETAG_POSTS_SUCCESS,
  GET_SINGLETAG_POSTS_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

export const getSingleTagAndPosts = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getSingleTagAndPostsRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const singleTagAndPosts = await axios.get(
        `${Ngrok.url}/api/tag/${id}`,
        config
      );
      dispatch(getSingleTagAndPostsSuccess(singleTagAndPosts.data));
    } catch (error) {
      dispatch(getSingleTagAndPostsFailure(error.message));
    }
  };
};

export const getSingleTagAndPostsRequest = () => {
  return {
    type: GET_SINGLETAG_POSTS_REQUEST,
  };
};
export const getSingleTagAndPostsSuccess = (singleTag) => {
  return {
    type: GET_SINGLETAG_POSTS_SUCCESS,
    payload: singleTag,
  };
};
export const getSingleTagAndPostsFailure = (error) => {
  return {
    type: GET_SINGLETAG_POSTS_FAILURE,
    payload: error,
  };
};
