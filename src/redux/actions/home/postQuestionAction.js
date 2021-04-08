import {
  POST_QUESTION_REQUEST,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE,
} from "../../actionTypes";
import axios from "axios";
import Ngrok from "../../../constants/Ngrok";

//post question to server
export const postQuestionAction = (data) => {
  //   console.log("Post Question(Action) Data", data);
  return async (dispatch) => {
    try {
      dispatch(postQuestionRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newQuestion = await axios.post(
        `${Ngrok.url}/api/question/`,
        data,
        config
      );
      //   console.log("Post Question(Action) Server Data",newQuestion.data);
      dispatch(postQuestionSuccess(newQuestion.data));
    } catch (error) {
      dispatch(postQuestionFailure(error.message));
    }
  };
};
export const postQuestionRequest = () => {
  return {
    type: POST_QUESTION_REQUEST,
  };
};
export const postQuestionSuccess = (data) => {
  return {
    type: POST_QUESTION_SUCCESS,
    payload: data,
  };
};
export const postQuestionFailure = (error) => {
  return {
    type: POST_QUESTION_FAILURE,
    payload: error,
  };
};
