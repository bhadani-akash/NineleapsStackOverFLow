import {
  GET_SINGLETAG_POSTS_REQUEST,
  GET_SINGLETAG_POSTS_SUCCESS,
  GET_SINGLETAG_POSTS_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  tag: "",
  error: "",
};
const getSingleTagAndPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLETAG_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLETAG_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        tag: action.payload,
        error: "",
      };
    case GET_SINGLETAG_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        tag: "",
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getSingleTagAndPostsReducer;
