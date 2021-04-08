import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from "../../actionTypes";
const initialState = {
  loading: false,
  post: {},
  error: "",
};
const getPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getPostReducer;
