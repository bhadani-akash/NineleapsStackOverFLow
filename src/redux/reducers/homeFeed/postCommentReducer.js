import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  comment: {},
  error: "",
};
const postCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };
    case POST_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postCommentReducer;
