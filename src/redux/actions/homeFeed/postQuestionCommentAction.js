import {
  POST_QUESTION_COMMENT_REQUEST,
  POST_QUESTION_COMMENT_SUCCESS,
  POST_QUESTION_COMMENT_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

const postQuestionCommentAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(postQuestionCommentRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const comment = await axios.post(
        `${Ngrok.url}/api/comment/question/${id}`,
        data,
        config
      );
      dispatch(postQuestionCommentSuccess(comment.data));
    } catch (error) {
      dispatch(postQuestionCommentFailure(error.message));
    }
  };
};
export const postQuestionCommentRequest = () => {
  return {
    type: POST_QUESTION_COMMENT_REQUEST,
  };
};
export const postQuestionCommentSuccess = (comment) => {
  return {
    type: POST_QUESTION_COMMENT_SUCCESS,
    payload: comment,
  };
};
export const postQuestionCommentFailure = (error) => {
  return {
    type: POST_QUESTION_COMMENT_FAILURE,
    payload: error,
  };
};
export default postQuestionCommentAction;
