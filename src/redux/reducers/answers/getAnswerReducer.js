import {
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAIL,
} from "../../actionTypes";
const initialState = {
  loading: false,
  answer: {},
  error: "",
};
const getAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ANSWER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_ANSWER_SUCCESS:
      return {
        ...state,
        loading: false,
        answer: action.payload,
      };
    case POST_ANSWER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getAnswerReducer;
