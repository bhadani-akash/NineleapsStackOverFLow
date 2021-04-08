import {
  POST_QUESTION_REQUEST,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  questionData: "",
  error: "",
};
const postQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questionData: action.payload,
      };
    case POST_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postQuestionReducer;
