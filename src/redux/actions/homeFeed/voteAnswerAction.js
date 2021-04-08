import {
  VOTE_ANSWER_REQUEST,
  VOTE_ANSWER_SUCCESS,
  VOTE_ANSWER_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

const voteAnswerAction = (id, data) => {
  // console.log("VoteAnswerAction: Answer ID:", id);
  // console.log("VoteAnswerAction: Data", data);
  return async (dispatch) => {
    try {
      dispatch(voteAnswerRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const voteAnswer = await axios.put(
        `${Ngrok.url}/api/votes/answer/${id}/upvotes`,
        data,
        config
      );
      // console.log("VoteAnswerAction: BackendResponse:", voteAnswer.data);
      dispatch(voteAnswerSuccess(voteAnswer.data));
    } catch (error) {
      dispatch(voteAnswerFailure(error.message));
    }
  };
};

export const voteAnswerRequest = () => {
  return {
    type: VOTE_ANSWER_REQUEST,
  };
};
export const voteAnswerSuccess = (voteAnswer) => {
  return {
    type: VOTE_ANSWER_SUCCESS,
    payload: voteAnswer,
  };
};
export const voteAnswerFailure = (error) => {
  return {
    type: VOTE_ANSWER_FAILURE,
    payload: error,
  };
};
export default voteAnswerAction;
