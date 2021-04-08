import {
  POST_QUESTION_COMMENT_REQUEST,
  POST_QUESTION_COMMENT_SUCCESS,
  POST_QUESTION_COMMENT_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  questionComment: {},
  error: "",
};
const postQuestionCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_QUESTION_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_QUESTION_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };
    case POST_QUESTION_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postQuestionCommentReducer;
