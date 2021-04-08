import {
  VOTE_QUESTION_REQUEST,
  VOTE_QUESTION_SUCCESS,
  VOTE_QUESTION_FAILURE,
} from "../../actionTypes";

const initialState = {
  loading: false,
  voteQuestion: {},
  error: "",
};

const voteQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VOTE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        voteQuestion: action.payload,
      };
    case VOTE_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default voteQuestionReducer;
