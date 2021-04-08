import {
  GET_ALLTAGS_REQUEST,
  GET_ALLTAGS_SUCCESS,
  GET_ALLTAGS_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  tags: [],
  error: "",
};
const getAllTagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLTAGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ALLTAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload,
        error: "",
      };
    case GET_ALLTAGS_FAILURE:
      return {
        ...state,
        loading: false,
        tags: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getAllTagsReducer;
