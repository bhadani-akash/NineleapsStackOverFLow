import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

const postCommentAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(postCommentRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const comment = await axios.post(
        `${Ngrok.url}/api/comment/answer/${id}`,
        data,
        config
      );
      dispatch(postCommentSuccess(comment.data));
    } catch (error) {
      dispatch(postCommentFailure(error.message));
    }
  };
};
export const postCommentRequest = () => {
  return {
    type: POST_COMMENT_REQUEST,
  };
};
export const postCommentSuccess = (comment) => {
  return {
    type: POST_COMMENT_SUCCESS,
    payload: comment,
  };
};
export const postCommentFailure = (error) => {
  return {
    type: POST_COMMENT_FAILURE,
    payload: error,
  };
};
export default postCommentAction;
