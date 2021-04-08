import {
  VOTE_ANSWER_REQUEST,
  VOTE_ANSWER_SUCCESS,
  VOTE_ANSWER_FAILURE,
} from "../../actionTypes";

const initialState = {
  loading: false,
  voteAnswer: {},
  error: "",
};

const voteAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_ANSWER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VOTE_ANSWER_SUCCESS:
      return {
        ...state,
        loading: false,
        voteAnswer: action.payload,
      };
    case VOTE_ANSWER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default voteAnswerReducer;
