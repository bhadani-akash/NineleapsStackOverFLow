import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "../../actionTypes";
const initialState = {
  loading: false,
  posts: [],
  error: "",
};
const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        // posts: action.payload,
        posts: [...state.posts, ...action.payload],
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getPostsReducer;
