import {
  VOTE_QUESTION_REQUEST,
  VOTE_QUESTION_SUCCESS,
  VOTE_QUESTION_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

const voteQuestionAction = (id, data) => {
  // console.log("VoteQuestionAction: Question ID:", id);
  // console.log("VoteQuestionAction: Data", data);
  return async (dispatch) => {
    try {
      dispatch(voteQuestionRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const voteQuestion = await axios.put(
        `${Ngrok.url}/api/votes/question/${id}/upvotes`,
        data,
        config
      );
      // console.log("VoteQuestionAction: BackendResponse:", voteQuestion.data);
      dispatch(voteQuestionSuccess(voteQuestion.data));
    } catch (error) {
      dispatch(voteQuestionFailure(error.message));
    }
  };
};

export const voteQuestionRequest = () => {
  return {
    type: VOTE_QUESTION_REQUEST,
  };
};
export const voteQuestionSuccess = (voteQuestion) => {
  return {
    type: VOTE_QUESTION_SUCCESS,
    payload: voteQuestion,
  };
};
export const voteQuestionFailure = (error) => {
  return {
    type: VOTE_QUESTION_FAILURE,
    payload: error,
  };
};
export default voteQuestionAction;
