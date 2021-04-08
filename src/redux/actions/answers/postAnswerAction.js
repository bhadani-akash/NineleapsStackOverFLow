import {
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAIL,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

//add
const postAnswerAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(addAnswerRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const answer = await axios.post(
        `${Ngrok.url}/api/answer/${id}`,
        data,
        config
      );
      dispatch(addAnswerSuccess(answer.data));
    } catch (error) {
      dispatch(addAnswerFailure(error.message));
    }
  };
};
export const addAnswerRequest = () => {
  return {
    type: POST_ANSWER_REQUEST,
  };
};
export const addAnswerSuccess = (answer) => {
  return {
    type: POST_ANSWER_SUCCESS,
    payload: answer,
  };
};
export const addAnswerFailure = (error) => {
  return {
    type: POST_ANSWER_FAIL,
    payload: error,
  };
};
export default postAnswerAction;
